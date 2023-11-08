import { z } from 'zod';

/**
 * Common EVM Data Schema
 */
export const evmAddressSchema = z.string().regex(/^0x[\dA-Fa-f]{40}$/);
export const evmIdSchema = z.string().regex(/^0x[\dA-Fa-f]{64}$/);
export const evmSignatureSchema = z.string().regex(/^0x[\dA-Fa-f]{130}$/);

export const prometheusDurationSchema = z.string().regex(/^[0-9]+[smhdwy]$/);

export const signedMessageSchema = z.object({
  message: z.string(),
  timestamp: z.string(),
  signature: evmSignatureSchema
});

export const tokenOwnerGroupSchema = z.object({
  airnode: evmAddressSchema,
  lokiEndpoint: z.string(),
  lokiToken: z.string(),
  lokiUser: z.string()
});

export const pusherHeartbeatPayloadSchema = z.object({
  airnode: evmAddressSchema,
  stage: z.string(),
  nodeVersion: z.string(),
  currentTimestamp: z.string(),
  deploymentTimestamp: z.string(),
  configHash: z.string(),
  signature: evmSignatureSchema
});

export const appTypeSchema = z.union([z.literal('pusher'), z.literal('airseekerV2')]);

export type PusherHeartbeatPayload = z.infer<typeof pusherHeartbeatPayloadSchema>;
export type SignedMessage = z.infer<typeof signedMessageSchema>;
export type TokenOwnerGroup = z.infer<typeof tokenOwnerGroupSchema>;
export type AppType = z.infer<typeof appTypeSchema>;
export interface PromiseError<T> extends Error {
  reason: T;
}

export const APP_TYPES = appTypeSchema.options.map((option) => option.value);
