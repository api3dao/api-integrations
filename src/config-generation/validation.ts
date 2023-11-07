import { ethers } from 'ethers';
import { z } from 'zod';

export const deploymentLocationsSchema = z.enum(['aws', 'local']).array().nonempty().max(2);
export const evmAddressSchema = z
  .string()
  .refine((address) => ethers.utils.isAddress(address), { message: 'Airnode address is not in correct format!' });

export const apiDataSchema = z.object({
  alias: z.string(),
  name: z.string(),
  airnode: evmAddressSchema,
  xpub: z.string(),
  supportedFeedsInBatches: z.record(z.string(), z.array(z.array(z.string()))),
  deploymentLocations: deploymentLocationsSchema
});
