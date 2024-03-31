/*

This script synchronizes OIS files and adds new feeds based on the `api-parameters` files.

*/

import * as fs from 'fs';
import prettier from 'prettier';
import { apiDataSchema } from './validation';
import { readJson, saveJson } from './config-utils';
import { globSync } from 'glob';
import { OIS } from '@api3/ois';
import { execSync } from 'child_process';

// some APIs supports batched API requests where you input multiple data feed names
// to some parameter. These parameter names should be known in order to accumulate data
// feed names in that parameter.
const parametersToAccumulateForEachApi: Record<string, string[]> = {
  CoinGecko: ['ids'],
  'NewChangeFX-Crypto': ['pairs'],
  TraderMade: ['currency']
};

const oisFileNameExceptions: Record<string, string> = {
  'NewChangeFX-Crypto': 'ncfx-crypto',
  'NewChangeFX-Forex': 'ncfx-forex'
};

function removeByIndex(str: string, index: number) {
  return str.slice(0, index) + str.slice(index + 1);
}

const main = async () => {
  const APIS_ROOT = './data/apis/';

  const existingProviders = fs.readdirSync(APIS_ROOT);

  await Promise.all(
    existingProviders.map((apiAlias) => {
      let apiData = apiDataSchema.parse(readJson(`./data/apis/${apiAlias}/api-data.json`));
      const oises: OIS[] = globSync(`./data/apis/${apiAlias}/oises/*`).map((oisPath) => readJson(oisPath));

      Object.entries(apiData.supportedFeedsInBatches).map(async ([oisTitle, dataFeedsInBatches]) => {
        const preProcessingObject: Record<string, Record<string, string>> = {};
        const postProcessingObject: Record<string, string> = {};
        const allApiParameters = globSync(`${APIS_ROOT}/${apiAlias}/api-parameters/*`).map((path) => readJson(path));

        dataFeedsInBatches.map((dataFeedBatch) => {
          // fill preProcessingObject
          if (dataFeedBatch.length <= 1) {
            const dataFeedName = dataFeedBatch[0];
            const targetApiParameter = allApiParameters.find((ap) => ap.name === dataFeedName);
            preProcessingObject[dataFeedName] = {
              path: targetApiParameter.path,
              parameters: targetApiParameter.parameters
            };
          } else {
            const parametersToAccumulate = parametersToAccumulateForEachApi[oisTitle];
            const accumulatedParameters = parametersToAccumulate
              .map((parameterName) => {
                return dataFeedBatch.map((dataFeedName) => {
                  const targetApiParameter = allApiParameters.find((ap) => ap.name === dataFeedName);
                  return targetApiParameter.parameters[parameterName];
                });
              })
              .join(',');
            dataFeedBatch.map((dataFeedName) => {
              const targetApiParameter = allApiParameters.find((ap) => ap.name === dataFeedName);
              preProcessingObject[dataFeedName] = {
                path: targetApiParameter.path,
                parameters: accumulatedParameters
              };
            });
          }
        });

        // fill postProcessingObject
        const allFeeds = dataFeedsInBatches.flat(2);
        allFeeds.forEach((dataFeedName) => {
          const targetApiParameter = allApiParameters.find((ap) => ap.name === dataFeedName);
          postProcessingObject[dataFeedName] = targetApiParameter.parser;
        });

        // fill pre/post processing fields
        let targetOis = oises.find((ois) => ois.title === oisTitle);
        const feedEndpointIndex = targetOis.endpoints.findIndex((e) => e.name === 'feed');

        targetOis.endpoints[feedEndpointIndex].preProcessingSpecificationV2 = {
          environment: 'Node',
          value: removeByIndex(
            await prettier.format(
              `
            ({ endpointParameters }) => {
              const preProcessingObject = ${JSON.stringify(preProcessingObject)};
              return {
                endpointParameters: {
                  path: preProcessingObject[endpointParameters.name].path,
                ...preProcessingObject[endpointParameters.name].parameters
                }
              };
            }
          `,
              { semi: false, parser: 'meriyah' }
            ),
            0
          ),
          timeoutMs: 5000
        };

        targetOis.endpoints[feedEndpointIndex].postProcessingSpecificationV2 = {
          environment: 'Node',
          value: removeByIndex(
            await prettier.format(
              `
            ({ response, endpointParameters }) => {
              const postProcessingObject = ${JSON.stringify(postProcessingObject)};
              const parser = eval(postProcessingObject[endpointParameters.name]);
              return { response: parser(response) };
            }
          `,
              { semi: false, parser: 'meriyah' }
            ),
            0
          ),
          timeoutMs: 5000
        };

        // save the updated OIS file
        let oisFileName = apiAlias;
        if (Object.keys(oisFileNameExceptions).includes(oisTitle)) {
          oisFileName = oisFileNameExceptions[oisTitle];
        }

        if (oisTitle === 'TraderMade') {
          saveJson(`${APIS_ROOT}/${apiAlias}/oises/${oisFileName}.json`, targetOis);
        }
      });
    })
  );

  execSync('pnpm prettier:write');
};

main();
