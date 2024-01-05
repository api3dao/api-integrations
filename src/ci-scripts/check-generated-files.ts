import { globSync } from 'glob';
import { isEqual } from 'lodash';
import { readJson } from '../config-generation/config-utils';
import { apisData } from '../generated/apis';
import { apiDataSchema } from '../types';

function main() {
  const apiDataPaths = globSync('./data/apis/*/api-data.json').filter((pth) => !pth.includes('/demo/'));
  const apiDataJson = {};
  const airnodeMapping = {};
  apiDataPaths.forEach((path) => {
    const apiData = apiDataSchema.parse(readJson(path));
    apiDataJson[apiData.alias] = apiData;
    airnodeMapping[apiData.alias] = apiData.airnode;
  });

  const result = isEqual(apisData, apiDataJson);
  if (!result) {
    throw Error(
      'src/generates/apis.ts\'s contents does not match the data/apis/*/apis-data.json. Did you forget to run "pnpm build"?'
    );
  }

  console.log('apis.ts is sync.');
}

main();
