import { COMMON_HEADERS } from './constants';

import type { APIGatewayProxyEventHeaders, APIGatewayProxyResult } from 'aws-lambda';

// This function helps to not JSON.stringify twice if the input is already stringified JSON
// Otherwise the output would be a string with escaped quotes
const jsonParseIfCan = (str: string): unknown => {
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

export const isAuthorized = (headers: APIGatewayProxyEventHeaders) => {
  const apiKey = headers['x-api-key'] ?? headers['X-Api-Key'] ?? headers['X-API-KEY'];
  const validApiKeys: string[] = process.env.API_KEYS?.split(',') || [];
  return validApiKeys.includes(apiKey);
};
