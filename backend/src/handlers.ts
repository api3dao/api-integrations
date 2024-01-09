import AWS from 'aws-sdk';
import { isNil } from 'lodash';
import { go, goSync } from '@api3/promise-utils';

import { COMMON_HEADERS } from './constants';
import {
  GrafanaLokiAccessRecord,
  SignedApiAccessRecord,
  grafanaLokiAccessRequestSchema,
  signedApiAccessRequestSchema,
  deploymentStatusRequestSchema
} from './types';
import {
  extractApiKey,
  extractUserFromApiKey,
  generateErrorResponse,
  generateRandomBearerToken,
  isAuthorized,
  normalizeObject
} from './utils';
import { createToken, deleteToken } from './grafana-requests';
import { extractUniqueAirnodeFeedHeartbeatPayloads } from './process-logs';

import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

if (process.env.LOCAL_DEV) {
  require('aws-sdk/lib/maintenance_mode_message').suppress = true;
  const localAWSConfig = {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'local',
    endpoint: 'http://localhost:8000'
  };
  AWS.config.update(localAWSConfig);
  console.log('AWS SDK was configured for local development.');
}

const docClient = new AWS.DynamoDB.DocumentClient();

export const connectGrafanaLokiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => grafanaLokiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() =>
    docClient.get({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for Grafana Loki access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item))
    return generateErrorResponse(404, `No Grafana Loki access record found for ${airnode}`);

  return {
    statusCode: 200,
    headers: COMMON_HEADERS,
    body: JSON.stringify(normalizeObject(goReadDb.data.Item))
  };
};

export const createGrafanaLokiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => grafanaLokiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() =>
    docClient.get({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for Grafana Loki access record',
      goReadDb.error.message
    );

  if (!isNil(goReadDb.data.Item))
    return generateErrorResponse(409, `Grafana Loki access record for ${airnode} already exists`);

  const goCreateToken = await go(() => createToken(airnode));
  if (!goCreateToken.success)
    return generateErrorResponse(
      500,
      'Unable to create token for Grafana Cloud API',
      (goCreateToken.error as any).response.data.message
    );

  const { token: lokiToken, id: lokiTokenId } = goCreateToken.data.data;

  const newRecord: GrafanaLokiAccessRecord = {
    airnode,
    generatedBy: extractUserFromApiKey(extractApiKey(event.headers)!),
    lokiUser: process.env.GF_LOKI_USER!,
    lokiToken,
    lokiTokenId,
    lokiEndpoint: process.env.GF_LOKI_ENDPOINT!
  };

  const goWriteDb = await go(() =>
    docClient.put({ TableName: 'grafanaLokiAccessRegistry', Item: newRecord }).promise()
  );
  if (!goWriteDb.success) {
    const goDeleteToken = await go(() => deleteToken(lokiTokenId));
    if (!goDeleteToken.success)
      return generateErrorResponse(
        500,
        'Unable to send created token to the database, ' +
          'besides while reverting changes it was failed to delete created token from Grafana Cloud API. ' +
          'Please delete it manually by using Grafana Cloud dashboard',
        JSON.stringify([goWriteDb.error.message, (goDeleteToken.error as any).response.data.message])
      );
    return generateErrorResponse(500, 'Unable to send created token to the database', goWriteDb.error.message);
  }
  return { statusCode: 200, headers: COMMON_HEADERS, body: JSON.stringify(normalizeObject(newRecord)) };
};

export const deleteGrafanaLokiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => grafanaLokiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() =>
    docClient.get({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for Grafana Loki access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item))
    return generateErrorResponse(404, `No Grafana Loki access record for ${airnode} found to delete`);

  const { lokiTokenId } = goReadDb.data.Item;

  const goDeleteDb = await go(() =>
    docClient.delete({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goDeleteDb.success) {
    return generateErrorResponse(500, 'Unable to delete token from the database', goDeleteDb.error.message);
  }

  const goDeleteToken = await go(() => deleteToken(lokiTokenId));
  if (!goDeleteToken.success)
    return generateErrorResponse(
      500,
      `Failed to delete token with ID ${lokiTokenId} from Grafana Cloud API. ` +
        'Please delete it manually by using Grafana Cloud dashboard',
      JSON.stringify((goDeleteToken.error as any).response.data.message)
    );

  return {
    statusCode: 200,
    headers: COMMON_HEADERS,
    body: JSON.stringify({ message: `Grafana Loki access record for ${airnode} has been deleted` })
  };
};

export const connectSignedApiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => signedApiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() => docClient.get({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for signed API access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item)) return generateErrorResponse(404, `No signed API access record found for ${airnode}`);

  return {
    statusCode: 200,
    headers: COMMON_HEADERS,
    body: JSON.stringify(normalizeObject(goReadDb.data.Item))
  };
};

export const createSignedApiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => signedApiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() => docClient.get({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for signed API access record',
      goReadDb.error.message
    );

  if (!isNil(goReadDb.data.Item))
    return generateErrorResponse(409, `Signed API access record for ${airnode} already exists`);

  const newRecord: SignedApiAccessRecord = {
    airnode,
    bearerToken: {
      api3: { airnodeFeed: generateRandomBearerToken(), oev: generateRandomBearerToken() },
      nodary: { airnodeFeed: generateRandomBearerToken(), oev: generateRandomBearerToken() }
    },
    generatedBy: extractUserFromApiKey(extractApiKey(event.headers)!)
  };

  const goWriteDb = await go(() => docClient.put({ TableName: 'signedApiAccessRegistry', Item: newRecord }).promise());
  if (!goWriteDb.success)
    return generateErrorResponse(500, 'Unable to send created token to the database', goWriteDb.error.message);

  return { statusCode: 200, headers: COMMON_HEADERS, body: JSON.stringify(normalizeObject(newRecord)) };
};

export const deleteSignedApiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() => signedApiAccessRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;

  const goReadDb = await go(() => docClient.get({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for signed API access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item))
    return generateErrorResponse(404, `No signed API access record for ${airnode} found to delete`);

  const goDeleteDb = await go(() =>
    docClient.delete({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goDeleteDb.success) {
    return generateErrorResponse(500, 'Unable to delete token from the database', goDeleteDb.error.message);
  }

  return {
    statusCode: 200,
    headers: COMMON_HEADERS,
    body: JSON.stringify({ message: `Signed API access record for ${airnode} has been deleted` })
  };
};

export const evaluateDeploymentStatus = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goParseRequestParams = await go(() => deploymentStatusRequestSchema.parseAsync(event.queryStringParameters));
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameters 'airnode' and 'app' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode, app } = goParseRequestParams.data;

  switch (app) {
    case 'airnode-feed': {
      const goUniquePayloads = await go(() => extractUniqueAirnodeFeedHeartbeatPayloads(airnode));
      if (!goUniquePayloads.success)
        return generateErrorResponse(
          500,
          'Unable to extract unique airnode feed heartbeat payloads',
          goUniquePayloads.error.message
        );

      return {
        statusCode: 200,
        headers: { ...COMMON_HEADERS },
        body: JSON.stringify(normalizeObject(goUniquePayloads.data))
      };
    }
    default: {
      return generateErrorResponse(400, `Handler for app type '${app}' not implemented`);
    }
  }
};
