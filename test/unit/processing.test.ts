import { readdirSync } from 'fs';
import _, { difference } from 'lodash';
import { preProcessEndpointParametersV2, postProcessResponseV2 } from '@api3/commons';
import { globSync } from 'glob';
import { EXPECTED_PRICE, getApiResponseFixture } from './api-response-fixtures';
import { readJson } from '../../src/config-generation/config-utils';
import * as apis from '../../src/generated/apis';

it('Check if generated apis.ts and ./data/apis folder has same APIs', () => {
  const apisInFolder = readdirSync('./data/apis');
  const generatedApis = Object.keys(apis.apisData);
  const diff = difference(generatedApis, apisInFolder).concat(difference(apisInFolder, generatedApis));
  expect(diff.length).toEqual(0);
});

it('Check if there are any "undefined" after preProcessing every data feed of every API', async () => {
  const oises = globSync('./data/apis/*/oises/*').map((oisPath) => readJson(oisPath));
  const allDataFeeds = Object.values(apis.apisData).map((apiData) => apiData.supportedFeedsInBatches);

  for (const ois of oises) {
    const feedEndpoint = ois.endpoints.find((e) => e.name === 'feed');
    const preProcessingSpecificationV2 = feedEndpoint.preProcessingSpecificationV2;
    const dataFeeds = allDataFeeds.find((obj) => Object.keys(obj).includes(ois.title));
    for (const dataFeedName of dataFeeds[ois.title].flat(10).filter((n: string) => n !== 'MOCK/USD')) {
      const endpointParameters = { name: dataFeedName };
      const result = await preProcessEndpointParametersV2(preProcessingSpecificationV2, endpointParameters);
      const resultAsStr = JSON.stringify(result);
      expect(resultAsStr.includes('undefined')).toEqual(false);
    }
  }
});

describe('Check if postProcessing snippets can successfully parse every data feed of every API', () => {
  const oises = globSync('./data/apis/*/oises/*').map((oisPath) => readJson(oisPath));
  const allDataFeeds = Object.values(apis.apisData).map((apiData) => apiData.supportedFeedsInBatches);

  for (const ois of oises) {
    const feedEndpoint = ois.endpoints.find((e) => e.name === 'feed');
    const postProcessingSpecificationV2 = feedEndpoint.postProcessingSpecificationV2;
    const preProcessingSpecificationV2 = feedEndpoint.preProcessingSpecificationV2;
    const dataFeeds = allDataFeeds.find((obj) => Object.keys(obj).includes(ois.title));

    describe(`Test ${ois.title}`, () => {
      for (const dataFeedName of dataFeeds[ois.title].flat(10).filter((n: string) => n !== 'MOCK/USD')) {
        it(`Test ${dataFeedName}`, async () => {
          const endpointParameters = { name: dataFeedName };
          const apiCallParameters = await preProcessEndpointParametersV2(
            preProcessingSpecificationV2,
            endpointParameters
          );

          const apiResponses = getApiResponseFixture(ois.title, apiCallParameters, endpointParameters);
          const results = [];
          // Same OIS file includes data feeds of different category, which also has different response types.
          // "getApiResponseFixture" returns all response types, we iterate over them and try to parse and record the results.
          // "results" array must include the "EXPECTED_PRICE".
          // try catch blocks are required in order to suppress the expected errors.
          // errors are expected since we are trying to parse different types of respones with the same postProcessing
          for (const apiResponse of apiResponses) {
            try {
              const result = await postProcessResponseV2(
                apiResponse,
                postProcessingSpecificationV2,
                endpointParameters
              );
              results.push(result.response);
            } catch (err) {
              continue;
            }
          }
          expect(results.includes(EXPECTED_PRICE)).toEqual(true);
        });
      }
    });
  }
});
