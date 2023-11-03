import { COMMON_HEADERS } from './constants';
import { SignedMessage } from './types';
import type { APIGatewayProxyResult } from 'aws-lambda';

export const generateErrorResponse = (
  statusCode: number,
  message: string,
  detail?: string,
  causing?: SignedMessage
): APIGatewayProxyResult => {
  return { statusCode, headers: COMMON_HEADERS, body: JSON.stringify({ message, detail, causing }) };
};
