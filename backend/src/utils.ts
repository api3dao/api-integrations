import { randomBytes } from 'crypto';
import { pick } from 'lodash';

import { BEARER_TOKEN_LENGTH, COMMON_HEADERS } from './constants';
import { apiKeyListSchema } from './types';

import type { APIGatewayProxyEventHeaders, APIGatewayProxyResult } from 'aws-lambda';

// This function helps to not JSON.stringify twice if the input is already stringified JSON
// Otherwise the output would be a string with escaped quotes
const jsonParseIfCan = (str: string | undefined): unknown => {
  if (!str) return str;
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};

export const generateErrorResponse = (
  statusCode: number,
  message: string,
  detail?: string,
  causing?: string
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: COMMON_HEADERS,
    body: JSON.stringify(
      {
        message: jsonParseIfCan(message),
        detail: jsonParseIfCan(detail),
        causing: jsonParseIfCan(causing)
      },
      null,
      2
    )
  };
};

export const extractApiKey = (headers: APIGatewayProxyEventHeaders): string | undefined =>
  headers['x-api-key'] ?? headers['X-Api-Key'] ?? headers['X-API-KEY'];

export const extractUserFromApiKey = (apiKey: string): string => apiKey.split(':')[0];

export const isAuthorized = (headers: APIGatewayProxyEventHeaders): boolean => {
  if (!process.env.API_KEY_LIST) throw new Error('Environment variable API_KEY_LIST is not set');

  // API_KEY_LIST is a comma-separated list of API keys, e.g. "user1:pass1,user2:pass2,user3:pass3"
  if (!apiKeyListSchema.safeParse(process.env.API_KEY_LIST).success)
    throw new Error('Environment variable API_KEY_LIST is not in the correct format');

  const apiKey = extractApiKey(headers);
  if (!apiKey) return false;

  const validApiKeyList: string[] = process.env.API_KEY_LIST.split(',');
  return validApiKeyList.includes(apiKey);
};

const generateSecureRandomToken = (length: number): string => {
  const buffer = randomBytes(length);
  return buffer.toString('hex');
};

export const generateRandomBearerToken = (): string => generateSecureRandomToken(BEARER_TOKEN_LENGTH);

// Sort attributes of object based on keys alphabetically
export const normalizeObject = (obj: {}): {} => pick(obj, Object.keys(obj).sort());
