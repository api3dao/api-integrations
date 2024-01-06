import { appTypeSchema } from './types';

export const APP_TYPES = appTypeSchema.options.map((option) => option.value);

export const SEC_IN_MS = 1000;
export const MIN_IN_MS = 60 * SEC_IN_MS;

export const COMMON_HEADERS = {
  'content-type': 'application/json',
  'access-control-allow-origin': '*', // TODO: It'd be better to allow only for frontend URL
  'access-control-allow-methods': '*'
};

export const CACHE_HEADERS = {
  'cache-control': 'no-store', // Disable browser-caching
  'cdn-cache-control': 'max-age=10' // Enable CDN caching and set to 10
};
