import { go, goSync } from '@api3/promise-utils';
import AWS from 'aws-sdk';
import _ from 'lodash';

import { COMMON_HEADERS } from './constants';
import { APP_TYPES, TokenOwnerGroup, appTypeSchema, evmAddressSchema, generateTokenInputSchema } from './types';
import { generateErrorResponse, isAuthorized } from './utils';
import { createToken, queryLogs } from './grafana-requests';
import { extractHeartbeatPayloads } from './process-logs';

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
const tableName = 'tokenOwnerGroup';

export const generateToken = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (!isAuthorized(event.headers)) return generateErrorResponse(401, 'Unauthorized');

  if (_.isNil(event.body)) return generateErrorResponse(400, 'Invalid request, http body is missing');

  const goJsonParseBody = goSync(() => JSON.parse(event.body as string));
  if (!goJsonParseBody.success) return generateErrorResponse(400, 'Invalid request, body must be in JSON');

  const goValidateSchema = await go(async () => generateTokenInputSchema.parseAsync(goJsonParseBody.data));
  if (!goValidateSchema.success)
    return generateErrorResponse(
      400,
      'Invalid request, body must fit schema for "POST /generateToken" input schema',
      goValidateSchema.error.message
    );

  const { airnode } = goValidateSchema.data;

  // TODO: Check that signer address belongs to a partner provider in the following list:
  // https://github.com/api3dao/api-integrations/blob/f1d39ec3d172c77f6d047c64a45fcbfb7ae8863e/data/oisTitles.json
  // Blocked because repository isn't public

  const goReadDb = await go(() => docClient.get({ TableName: tableName, Key: { airnode } }).promise());
  if (!goReadDb.success)
    return generateErrorResponse(
      500,
      'Unable to get signed data from database to validate timestamp',
      goReadDb.error.message
    );

  if (!_.isNil(goReadDb.data.Item))
    return {
      statusCode: 200,
      headers: COMMON_HEADERS,
      body: JSON.stringify(goReadDb.data.Item)
    };

  const goToken = await go(() => createToken(airnode));
  if (!goToken.success)
    return generateErrorResponse(500, 'Unable to create new token', (goToken.error as any).response.data.message);

  const lokiToken = goToken.data.data.token;

  const newEntry: TokenOwnerGroup = {
    lokiUser: process.env.GF_LOKI_USER!,
    lokiToken,
    lokiEndpoint: process.env.GF_LOKI_ENDPOINT!,
    airnode
  };

  const goWriteDb = await go(() => docClient.put({ TableName: tableName, Item: newEntry }).promise());
  if (!goWriteDb.success)
    return generateErrorResponse(500, 'Unable to send created token to database', goWriteDb.error.message);

  return { statusCode: 200, headers: COMMON_HEADERS, body: JSON.stringify(newEntry) };
};

export const deploymentStatus = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (_.isNil(event.queryStringParameters?.airnode))
    return generateErrorResponse(400, 'Invalid request, query parameter airnode is missing');

  if (_.isNil(event.queryStringParameters?.app))
    return generateErrorResponse(400, 'Invalid request, query parameter app is missing');

  const goValidateAirnode = await go(() => evmAddressSchema.parseAsync(event.queryStringParameters?.airnode));
  if (!goValidateAirnode.success)
    return generateErrorResponse(400, 'Invalid request, query parameter airnode must be valid EVM address');

  const goValidateApp = await go(() => appTypeSchema.parseAsync(event.queryStringParameters?.app));
  if (!goValidateApp.success)
    return generateErrorResponse(400, `Invalid request, query parameter app must be in '${APP_TYPES.join(', ')}'`);

  const airnode = goValidateAirnode.data;
  const app = goValidateApp.data;

  const goLogs = await go(() => queryLogs(app, airnode, 'Sending heartbeat log', '30', '5m'));
  if (!goLogs.success) return generateErrorResponse(500, 'Unable to query logs from Grafana', goLogs.error.message);

  const logs = goLogs.data.data;

  const goProcessLogs = await go(() => extractHeartbeatPayloads(app, airnode, logs));
  if (!goProcessLogs.success)
    return generateErrorResponse(500, 'Unable to process logs from Grafana', goProcessLogs.error.message);

  return {
    statusCode: 200,
    headers: { ...COMMON_HEADERS },
    body: JSON.stringify(goProcessLogs.data)
  };
};
