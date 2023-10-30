import * as adapter from '@api3/airnode-adapter';
import isEmpty from 'lodash/isEmpty';
import { RESERVED_PARAMETERS } from '@api3/ois';
import { FIRST_API_CALL_TIMEOUT, PROCESSING_TIMEOUT } from '../data/constants';
import axios from 'axios';

export const removeKeys = (obj, keys) => {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);
  return newObj;
};

export function buildOptions(payload) {
  const { config, aggregatedApiCall } = payload;
  const { endpointName, parameters, oisTitle } = aggregatedApiCall;

  const ois = config.ois.find((o) => o.title === oisTitle);
  const apiCredentials = config.apiCredentials.filter((c) => c.oisTitle === oisTitle);

  // Gather the default endpoint parameter values
  const endpoint = ois.endpoints.find((endpoint) => endpoint.name === endpointName);
  const defaultParameters = endpoint.parameters.filter((p) => p.default !== undefined);

  // Override (and merge) the default endpoint parameters with the user parameters
  const allParameters = { ...defaultParameters, ...parameters };

  // Don't submit the reserved parameters to the API
  const sanitizedParameters = removeKeys(allParameters, RESERVED_PARAMETERS);

  return {
    endpointName,
    parameters: sanitizedParameters,
    ois,
    apiCredentials,
    metadata: null
  };
}

async function execute(config) {
  const axiosResponse = await axios({
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data,
    params: config.params,
    timeout: config.timeout
  });
  return axiosResponse;
}

async function post(request, config) {
  return await execute({
    ...request,
    url: `${request.baseUrl}${request.path}`,
    method: 'post',
    data: request.data,
    timeout: config?.timeout
  });
}

async function get(request, config) {
  return await execute({
    ...request,
    url: `${request.baseUrl}${request.path}`,
    method: 'get',
    params: request.data,
    data: undefined,
    timeout: config?.timeout
  });
}

async function executeRequest(request, config) {
  switch (request.method) {
    case 'get':
      return await get(request, config);
    case 'post':
      return await post(request, config);
    default:
      throw new Error(`Unsupported HTTP method: ${request.method}`);
  }
}

async function performApiCall(payload) {
  const options = buildOptions(payload);
  // We also pass the timeout to adapter to gracefully abort the request after the timeout.
  // timeout passed to adapter will cause axios socket to hang until the timeout is reached
  // even if the totalTimeoutMs is reached and the 2nd attempt is made

  const call = await executeRequest(adapter.buildRequest(options), { timeout: FIRST_API_CALL_TIMEOUT });
  if (call.status === 200) {
    return [{ ...call.data }];
  }

  const { aggregatedApiCall } = payload;
  const log = `Failed to call Endpoint:${aggregatedApiCall.endpointName}`;
  console.log(log);
  // eslint-disable-next-line import/no-named-as-default-member
  return [[log], { success: false, errorMessage: 'errorMessage' }];
}

export async function preProcessApiCall(endpoint, apiCallParameters) {
  const url = 'https://commons.api3dev.com/pre';
  const body = {
    apiCallParameters: apiCallParameters,
    endpoint: endpoint
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
}

export async function postProcessApiCall(apiCallResponse, endpoint, apiCallParameters) {
  const url = 'https://commons.api3dev.com/post';
  const body = {
    apiCallResponse: apiCallResponse,
    apiCallParameters: apiCallParameters,
    endpoint: endpoint
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export function getReservedParameterValue(name, endpoint, requestParameters) {
  const reservedParameter = endpoint.reservedParameters.find((rp) => rp.name === name);
  // Reserved parameters must be whitelisted in order to be used, even if they have no fixed or default value
  if (!reservedParameter) {
    return undefined;
  }

  return reservedParameter.fixed || requestParameters[name] || reservedParameter.default;
}

export function getReservedParameters(endpoint, requestParameters) {
  const _path = getReservedParameterValue('_path', endpoint, requestParameters);
  const _times = getReservedParameterValue('_times', endpoint, requestParameters);
  const _type = getReservedParameterValue('_type', endpoint, requestParameters);
  const _gasPrice = getReservedParameterValue('_gasPrice', endpoint, requestParameters);

  return { _type, _path, _times, _gasPrice };
}

export async function processSuccessfulApiCall(payload, rawResponse) {
  const { config, aggregatedApiCall } = payload;
  const { endpointName, oisTitle } = aggregatedApiCall;
  const ois = config.ois.find((o) => o.title === oisTitle);
  const endpoint = ois.endpoints.find((e) => e.name === endpointName);

  const postProcessApiCallResponse = await postProcessApiCall(rawResponse, endpoint, aggregatedApiCall.parameters, {
    totalTimeoutMs: PROCESSING_TIMEOUT
  });

  if (!postProcessApiCallResponse.success) {
    const log = postProcessApiCallResponse.error.message;
    return [[log], { success: false, errorMessage: postProcessApiCallResponse.error.message }];
  }

  return postProcessApiCallResponse.data;
}

export async function callApiWithAdapter(payload) {
  const ois = payload.config.ois.find((o) => o.title === payload.aggregatedApiCall.oisTitle);
  const endpoint = ois.endpoints.find((e) => e.name === payload.aggregatedApiCall.endpointName);

  const {
    aggregatedApiCall: { parameters }
  } = payload;
  const processedParameters = await preProcessApiCall(endpoint, parameters);

  // skip API call if operation is undefined and fixedOperationParameters is empty array
  if (!endpoint.operation && isEmpty(endpoint.fixedOperationParameters)) {
    // contents of preProcessingSpecifications or postProcessingSpecifications (or both) will simulate an API when API call is skipped
    if (isEmpty(endpoint.preProcessingSpecifications) && isEmpty(endpoint.postProcessingSpecifications)) {
      const message = `Failed to skip API call. Ensure at least one of 'preProcessingSpecifications' or 'postProcessingSpecifications' is defined and is not an empty array at ois '${payload.aggregatedApiCall.oisTitle}', endpoint '${payload.aggregatedApiCall.endpointName}'.`;
      const log = message;
      return [[log], { success: false, errorMessage: message }];
    }
    // output of preProcessingSpecifications can be used as output directly or
    // preProcessingSpecifications can be used to manipulate parameters to use in postProcessingSpecifications
    return processSuccessfulApiCall(payload, { data: processedParameters });
  }

  const [response] = await performApiCall({
    ...payload,
    aggregatedApiCall: { ...payload.aggregatedApiCall, parameters: processedParameters }
  });
  return processSuccessfulApiCall(payload, response);
}
