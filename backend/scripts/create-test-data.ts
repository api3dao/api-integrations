import { ethers } from 'ethers';
import { signMessage } from '../src/evm';

const main = async () => {
  const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC!);
  const message = process.env.TOKEN_REQUEST_MESSAGE!;
  const timestamp = Date.now().toString();
  const signature = await signMessage(wallet, message, timestamp);

  console.log(JSON.stringify({ signature, message, timestamp }));
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
