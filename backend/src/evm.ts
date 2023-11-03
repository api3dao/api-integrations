import { ethers } from 'ethers';

import type { SignedMessage } from './types';

export const decodeData = (data: string) => ethers.utils.defaultAbiCoder.decode(['int256'], data);

const packAndHashMessage = (message: string, timestamp: string) =>
  ethers.utils.keccak256(ethers.utils.solidityPack(['string', 'uint256'], [message, timestamp]));

export const signMessage = async (airnodeWallet: ethers.Wallet, message: string, timestamp: string) =>
  airnodeWallet.signMessage(packAndHashMessage(message, timestamp));

export const recoverSignerAddress = (data: SignedMessage): string => {
  const digest = packAndHashMessage(data.message, data.timestamp);
  return ethers.utils.verifyMessage(digest, data.signature);
};
