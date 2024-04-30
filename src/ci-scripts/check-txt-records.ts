import { resolveTxt } from 'dns';
import { promisify } from 'util';
import fs from 'fs';
import { readJson } from '../config-generation/config-utils';
import { apiDataSchema } from '../types';

const resolveAsync = promisify(resolveTxt);

async function checkDNS(domain: string) {
  const records = await resolveAsync(domain);
  return records;
}

async function main() {
  const APIS_ROOT = './data/apis/';

  const issues = [];

  for (const apiAlias of fs.readdirSync(APIS_ROOT).filter((apiAlias) => !apiAlias.includes('-mock'))) {
    const apiData = apiDataSchema.parse(readJson(`${APIS_ROOT}/${apiAlias}/api-data.json`));

    let targetUrl = '';
    switch (apiAlias) {
      case 'coingecko': {
        targetUrl = apiData.verifiedBaseUrl.replace('https://www.', '');
        break;
      }
      default: {
        targetUrl = apiData.verifiedBaseUrl.replace('https://', '');
      }
    }

    const txtRecords = await checkDNS(targetUrl);
    const chainApiVerificationRecord = txtRecords
      .flat(2)
      .find((record) => record === `chainapi-verification-keys=[${apiData.airnode}]`);

    if (!chainApiVerificationRecord) {
      issues.push(`🔴 Couldn't verify TXT records for ${apiAlias}.`);
    } else {
      console.log(`🟢 Verified TXT records for ${apiAlias}`);
    }
  }

  if (issues.length > 0) {
    throw Error(`Found issues while verifiying TXT records: \n${JSON.stringify(issues, null, 2)}`);
  }
}

main();
