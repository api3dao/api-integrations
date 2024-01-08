import { z } from 'zod';
import { BEARER_TOKEN_LENGTH } from './constants';

export interface PromiseError<T> extends Error {
  reason: T;
}

// For comma-separated list of API keys defined in environment variable API_KEY_LIST
export const apiKeyListSchema = z.string().regex(/^[a-zA-Z]+:[a-zA-Z0-9]+(?:,[a-zA-Z]+:[a-zA-Z0-9]+)*$/);

/**
 * Common EVM Data Schema
 */
export const evmAddressSchema = z.string().regex(/^0x[\dA-Fa-f]{40}$/);
export const evmIdSchema = z.string().regex(/^0x[\dA-Fa-f]{64}$/);
export const evmSignatureSchema = z.string().regex(/^0x[\dA-Fa-f]{130}$/);

export const prometheusDurationSchema = z.string().regex(/^[0-9]+[smhdwy]$/);

export const connectOrCreateGrafanaLokiAccessRequestSchema = z.object({ airnode: evmAddressSchema });
export const deleteGrafanaLokiAccessRequestSchema = z.object({ airnode: evmAddressSchema });
export const connectOrCreateSignedApiAccessRequestSchema = z.object({ airnode: evmAddressSchema });
export const deleteSignedApiAccessRequestSchema = z.object({ airnode: evmAddressSchema });

export const evaluateDeploymentStatusRequestSchema = z.object({ airnode: evmAddressSchema, app: z.string() });

export const grafanaLokiAccessRecordSchema = z
  .object({
    airnode: evmAddressSchema,
    generatedBy: z.string(),
    lokiEndpoint: z.string(),
    lokiToken: z.string(),
    lokiTokenId: z.string().uuid(),
    lokiUser: z.string()
  })
  .strict();

export const signedApiAccessRecordSchema = z
  .object({
    airnode: evmAddressSchema,
    bearerToken: z.object({
      api3: z.string().length(BEARER_TOKEN_LENGTH),
      nodary: z.string().length(BEARER_TOKEN_LENGTH)
    }),
    generatedBy: z.string()
  })
  .strict();

export const airnodeFeedHeartbeatPayloadSchema = z.object({
  airnode: evmAddressSchema,
  stage: z.string(),
  nodeVersion: z.string(),
  currentTimestamp: z.string(),
  deploymentTimestamp: z.string(),
  configHash: z.string(),
  signature: evmSignatureSchema
});

export const appTypeSchema = z.union([z.literal('signed-api'), z.literal('airnode-feed'), z.literal('airseeker-v2')]);

export type GrafanaLokiAccessRecord = z.infer<typeof grafanaLokiAccessRecordSchema>;
export type SignedApiAccessRecord = z.infer<typeof signedApiAccessRecordSchema>;
export type AirnodeFeedHeartbeatPayload = z.infer<typeof airnodeFeedHeartbeatPayloadSchema>;
export type AppType = z.infer<typeof appTypeSchema>;
