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

type ObjectWithoutSignatureAttribute = { [k in string]: string } & { ['signature']?: void };
export const stringifyPayload = (payload: ObjectWithoutSignatureAttribute) =>
  JSON.stringify(payload, Object.keys(payload).sort());

export const isVersionLower = (version: string, targetVersion: string) => {
  // Split the version strings into arrays of their components
  const versionComponents = version.split('.');
  const targetComponents = targetVersion.split('.');

  // Parse each component into integers
  const versionMajor = parseInt(versionComponents[0]);
  const versionMinor = parseInt(versionComponents[1]);
  const versionPatch = parseInt(versionComponents[2]);

  const targetMajor = parseInt(targetComponents[0]);
  const targetMinor = parseInt(targetComponents[1]);
  const targetPatch = parseInt(targetComponents[2]);

  // Compare the version components
  if (
    versionMajor < targetMajor ||
    (versionMajor === targetMajor && versionMinor < targetMinor) ||
    (versionMajor === targetMajor && versionMinor === targetMinor && versionPatch < targetPatch)
  ) {
    return true; // Version is lower than the target version
  } else {
    return false; // Version is equal to or higher than the target version
  }
};
