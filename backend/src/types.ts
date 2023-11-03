import { z } from 'zod';

/**
 * Common EVM Data Schema
 */
export const evmAddressSchema = z.string().regex(/^0x[\dA-Fa-f]{40}$/);
export const evmIdSchema = z.string().regex(/^0x[\dA-Fa-f]{64}$/);
export const evmSignatureSchema = z.string().regex(/^0x[\dA-Fa-f]{130}$/);

export const signedMessageSchema = z.object({
  message: z.string(),
  timestamp: z.string(),
  signature: evmSignatureSchema
});

export const tokenOwnerGroupSchema = z.object({
  airnode: evmAddressSchema.optional(),
  token: z.string()
});

export type SignedMessage = z.infer<typeof signedMessageSchema>;
export type TokenOwnerGroup = z.infer<typeof tokenOwnerGroupSchema>;
export interface PromiseError<T> extends Error {
  reason: T;
}
