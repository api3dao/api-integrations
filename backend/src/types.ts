import { z } from 'zod';

/**
 * Common EVM Data Schema
 */
export const evmAddressSchema = z.string().regex(/^0x[\dA-Fa-f]{40}$/);
export const evmIdSchema = z.string().regex(/^0x[\dA-Fa-f]{64}$/);
export const evmSignatureSchema = z.string().regex(/^0x[\dA-Fa-f]{130}$/);

export const prometheusDurationSchema = z.string().regex(/^[0-9]+[smhdwy]$/);

export const generateTokenInputSchema = z
  .object({
    airnode: evmAddressSchema
  })
  .strict();

export const tokenOwnerGroupSchema = z.object({
  airnode: evmAddressSchema,
  lokiEndpoint: z.string(),
  lokiToken: z.string(),
  lokiUser: z.string()
});

export const airnodeFeedHeartbeatPayloadSchema = z.object({
  airnode: evmAddressSchema,
  stage: z.string(),
  nodeVersion: z.string(),
  currentTimestamp: z.string(),
  deploymentTimestamp: z.string(),
  configHash: z.string(),
  signature: evmSignatureSchema
});

export const appTypeSchema = z.union([z.literal('airnode-feed'), z.literal('airseeker-v2')]);

export type AirnodeFeedHeartbeatPayload = z.infer<typeof airnodeFeedHeartbeatPayloadSchema>;
export type GenerateTokenInput = z.infer<typeof generateTokenInputSchema>;
export type TokenOwnerGroup = z.infer<typeof tokenOwnerGroupSchema>;
export type AppType = z.infer<typeof appTypeSchema>;
export interface PromiseError<T> extends Error {
  reason: T;
}

export const APP_TYPES = appTypeSchema.options.map((option) => option.value);
