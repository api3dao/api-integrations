import { COMMON_HEADERS } from './constants';

import type { APIGatewayProxyEventHeaders, APIGatewayProxyResult } from 'aws-lambda';

export const generateErrorResponse = (
  statusCode: number,
  message: string,
  detail?: string,
  causing?: string
): APIGatewayProxyResult => {
  return { statusCode, headers: COMMON_HEADERS, body: JSON.stringify({ message, detail, causing }) };
};

export const isAuthorized = (headers: APIGatewayProxyEventHeaders) => {
  const apiKey = headers['x-api-key'] ?? headers['X-Api-Key'] ?? headers['X-API-KEY'];
  const validApiKeys: string[] = process.env.API_KEYS?.split(',') || [];
  return validApiKeys.includes(apiKey);
};
