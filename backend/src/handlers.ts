import AWS from 'aws-sdk';
import { isNil } from 'lodash';
import { go, goSync } from '@api3/promise-utils';

import { COMMON_HEADERS } from './constants';
import {
  GrafanaLokiAccessRecord,
  SignedApiAccessRecord,
  connectOrCreateGrafanaLokiAccessRequestSchema,
  connectOrCreateSignedApiAccessRequestSchema,
  deleteGrafanaLokiAccessRequestSchema,
  deleteSignedApiAccessRequestSchema,
  evaluateDeploymentStatusRequestSchema
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

export const connectOrCreateGrafanaLokiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() =>
    connectOrCreateGrafanaLokiAccessRequestSchema.parseAsync(event.queryStringParameters)
  );
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;
  // TODO: Check that signer address belongs to a partner provider in the following list:
  // https://github.com/api3dao/api-integrations/blob/f1d39ec3d172c77f6d047c64a45fcbfb7ae8863e/data/oisTitles.json
  // Blocked because repository isn't public

  const goReadDb = await go(() =>
    docClient.get({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for grafana loki access record',
      goReadDb.error.message
    );

  if (!isNil(goReadDb.data.Item))
    return {
      statusCode: 200,
      headers: COMMON_HEADERS,
      body: JSON.stringify(normalizeObject(goReadDb.data.Item))
    };

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

  const goParseRequestParams = await go(() =>
    deleteGrafanaLokiAccessRequestSchema.parseAsync(event.queryStringParameters)
  );
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;
  // TODO: Check that signer address belongs to a partner provider in the following list:
  // https://github.com/api3dao/api-integrations/blob/f1d39ec3d172c77f6d047c64a45fcbfb7ae8863e/data/oisTitles.json
  // Blocked because repository isn't public

  const goReadDb = await go(() =>
    docClient.get({ TableName: 'grafanaLokiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for grafana loki access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item))
    return generateErrorResponse(404, `No grafana loki access record found to delete for ${airnode} in the database`);

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
    body: JSON.stringify({ message: `Grafana Loki access record for ${airnode} is deleted` })
  };
};

export const connectOrCreateSignedApiAccess = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goIsAuthorized = goSync(() => isAuthorized(event.headers));
  if (!goIsAuthorized.success)
    return generateErrorResponse(500, 'Unable to authorize API key', goIsAuthorized.error.message);
  if (!goIsAuthorized.data) return generateErrorResponse(401, 'Unauthorized');

  const goParseRequestParams = await go(() =>
    connectOrCreateSignedApiAccessRequestSchema.parseAsync(event.queryStringParameters)
  );
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;
  // TODO: Check that signer address belongs to a partner provider in the following list:
  // https://github.com/api3dao/api-integrations/blob/f1d39ec3d172c77f6d047c64a45fcbfb7ae8863e/data/oisTitles.json
  // Blocked because repository isn't public

  const goReadDb = await go(() => docClient.get({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for signed api access record',
      goReadDb.error.message
    );

  if (!isNil(goReadDb.data.Item))
    return {
      statusCode: 200,
      headers: COMMON_HEADERS,
      body: JSON.stringify(normalizeObject(goReadDb.data.Item))
    };

  const newRecord: SignedApiAccessRecord = {
    airnode,
    bearerToken: generateRandomBearerToken(),
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

  const goParseRequestParams = await go(() =>
    deleteSignedApiAccessRequestSchema.parseAsync(event.queryStringParameters)
  );
  if (!goParseRequestParams.success)
    return generateErrorResponse(
      400,
      `Invalid request, query parameter 'airnode' needs to be populated properly`,
      goParseRequestParams.error.message
    );

  const { airnode } = goParseRequestParams.data;
  // TODO: Check that signer address belongs to a partner provider in the following list:
  // https://github.com/api3dao/api-integrations/blob/f1d39ec3d172c77f6d047c64a45fcbfb7ae8863e/data/oisTitles.json
  // Blocked because repository isn't public

  const goReadDb = await go(() => docClient.get({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to read the database for signed api access record',
      goReadDb.error.message
    );

  if (isNil(goReadDb.data.Item))
    return generateErrorResponse(404, `No signed api access record found to delete for ${airnode} in the database`);

  const goDeleteDb = await go(() =>
    docClient.delete({ TableName: 'signedApiAccessRegistry', Key: { airnode } }).promise()
  );
  if (!goDeleteDb.success) {
    return generateErrorResponse(500, 'Unable to delete token from the database', goDeleteDb.error.message);
  }

  return {
    statusCode: 200,
    headers: COMMON_HEADERS,
    body: JSON.stringify({ message: `Signed API access record for ${airnode} is deleted` })
  };
};

export const evaluateDeploymentStatus = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const goParseRequestParams = await go(() =>
    evaluateDeploymentStatusRequestSchema.parseAsync(event.queryStringParameters)
  );
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
