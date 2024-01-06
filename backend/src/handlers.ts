import AWS from 'aws-sdk';
import { isNil } from 'lodash';
import { go } from '@api3/promise-utils';

import { COMMON_HEADERS } from './constants';
import {
  GrafanaLokiAccessRecord,
  connectOrCreateGrafanaLokiAccessRequestSchema,
  evaluateDeploymentStatusRequestSchema
} from './types';
import { generateErrorResponse, isAuthorized } from './utils';
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
  if (!isAuthorized(event.headers)) return generateErrorResponse(401, 'Unauthorized');

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
      body: JSON.stringify(goReadDb.data.Item)
    };

  const goCreateToken = await go(() => createToken(airnode));
  if (!goCreateToken.success)
    return generateErrorResponse(
      500,
      'Unable to create token for Grafana Cloud API',
      (goCreateToken.error as any).response.data.message
    );

  const lokiToken = goCreateToken.data.data.token;

  const newRecord: GrafanaLokiAccessRecord = {
    lokiUser: process.env.GF_LOKI_USER!,
    lokiToken,
    lokiEndpoint: process.env.GF_LOKI_ENDPOINT!,
    airnode
  };

  const goWriteDb = await go(() =>
    docClient.put({ TableName: 'grafanaLokiAccessRegistry', Item: newRecord }).promise()
  );
  if (!goWriteDb.success) {
    const goDeleteToken = await go(() => deleteToken(lokiToken));
    if (!goDeleteToken.success)
      return generateErrorResponse(
        500,
        'Unable to send created token to the database besides \
        failed to delete created token from Grafana Cloud API, \
        please delete it manually on Grafana Dashboard',
        JSON.stringify([goWriteDb.error.message, goDeleteToken.error.message])
      );
    return generateErrorResponse(500, 'Unable to send created token to the database', goWriteDb.error.message);
  }
  return { statusCode: 200, headers: COMMON_HEADERS, body: JSON.stringify(newRecord) };
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
        body: JSON.stringify(goUniquePayloads.data)
      };
    }
    default: {
      return generateErrorResponse(400, `Handler for app type '${app}' not implemented`);
    }
  }
};
