import { go, goSync } from '@api3/promise-utils';
import AWS from 'aws-sdk';
import { isNil } from 'lodash';

import { COMMON_HEADERS, MIN_IN_MS } from './constants';
import { recoverSignerAddress } from './evm';
import { TokenOwnerGroup, signedMessageSchema } from './types';
import { generateErrorResponse } from './utils';
import { createToken } from './grafana-requests';

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

export const getToken = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (isNil(event.body)) return generateErrorResponse(400, 'Invalid request, http body is missing');

  const goJsonParseBody = goSync(() => JSON.parse(event.body as string));
  if (!goJsonParseBody.success) return generateErrorResponse(400, 'Invalid request, body must be in JSON');

  const goValidateSchema = await go(async () => signedMessageSchema.parseAsync(goJsonParseBody.data));
  if (!goValidateSchema.success)
    return generateErrorResponse(
      400,
      'Invalid request, body must fit schema for signed message',
      goValidateSchema.error.message
    );

  const signedMessage = goValidateSchema.data;

  if (signedMessage.message !== process.env.TOKEN_REQUEST_MESSAGE)
    return generateErrorResponse(400, `Invalid request, message sent (${signedMessage.message}) is not expected`);

  if (new Date(signedMessage.timestamp) < new Date(Date.now() - 2 * MIN_IN_MS))
    return generateErrorResponse(400, `Invalid request, timestamp sent (${signedMessage.timestamp}) is not fresh`);

  const goRecoverSigner = goSync(() => recoverSignerAddress(signedMessage));
  if (!goRecoverSigner.success)
    return generateErrorResponse(400, 'Unable to recover signer address', goRecoverSigner.error.message);

  const airnode = goRecoverSigner.data;
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

  if (!isNil(goReadDb.data.Item))
    return {
      statusCode: 200,
      headers: COMMON_HEADERS,
      body: JSON.stringify(goReadDb.data.Item)
    };

  const goToken = await go(() => createToken(airnode));
  if (!goToken.success)
    return generateErrorResponse(500, 'Unable to create new token', (goToken.error as any).response.data.message);

  const token = goToken.data.data.token;

  const newEntry: TokenOwnerGroup = { airnode, token };

  const goWriteDb = await go(() => docClient.put({ TableName: tableName, Item: newEntry }).promise());
  if (!goWriteDb.success)
    return generateErrorResponse(500, 'Unable to send created token to database', goWriteDb.error.message);

  return { statusCode: 200, headers: COMMON_HEADERS, body: JSON.stringify(newEntry) };
};
