import { readdirSync } from 'fs';
import { difference } from 'lodash';
import { preProcessEndpointParametersV2, postProcessResponseV2 } from '@api3/commons';
import { globSync } from 'glob';
import { readJson } from '../../src/config-generation/config-utils';
import * as apis from '../../src/generated/apis';

describe('Test preProcessing', () => {
  it('Check if generated apis.ts and ./data/apis folder has same APIs', () => {
    const apisInFolder = readdirSync('./data/apis');
    const generatedApis = Object.keys(apis.apisData);
    const diff = difference(generatedApis, apisInFolder).concat(difference(apisInFolder, generatedApis));
    expect(diff.length).toEqual(0);
  });

  it('test preProcessing', async () => {
    const oises = globSync('./data/apis/*/oises/*').map((oisPath) => readJson(oisPath));
    const allDataFeeds = Object.values(apis.apisData).map((apiData) => apiData.supportedFeedsInBatches);

    for (const ois of oises) {
      const feedEndpoint = ois.endpoints.find((e) => e.name === 'feed');
      const preProcessingSpecificationV2 = feedEndpoint.preProcessingSpecificationV2;
      const dataFeeds = allDataFeeds.find((obj) => Object.keys(obj).includes(ois.title));
      for (const dataFeedName of dataFeeds[ois.title].flat(10)) {
        const endpointParameters = { name: dataFeedName };
        const result = await preProcessEndpointParametersV2(preProcessingSpecificationV2, endpointParameters);
      }
    }
  });
});
