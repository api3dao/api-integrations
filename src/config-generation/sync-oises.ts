/*

This script synchronizes OIS files and adds new feeds based on the `data-feed-blueprints` files.

*/

import * as fs from 'fs';
import { execSync } from 'child_process';
import prettier from 'prettier';
import { globSync } from 'glob';
import { OIS } from '@api3/ois';
import { apiDataSchema } from './validation';
import { readJson, saveJson } from './config-utils';

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
      const apiData = apiDataSchema.parse(readJson(`./data/apis/${apiAlias}/api-data.json`));
      const oises: OIS[] = globSync(`./data/apis/${apiAlias}/oises/*`).map((oisPath) => readJson(oisPath));

      Object.entries(apiData.supportedFeedsInBatches).map(async ([oisTitle, dataFeedsInBatches]) => {
        const preProcessingObject: Record<string, Record<string, Record<string, string>>> = {};
        const postProcessingObject: Record<string, string> = {};
        const allDataFeedBlueprints = globSync(`${APIS_ROOT}/${apiAlias}/data-feed-blueprints/*`).map((path) =>
          readJson(path)
        );

        dataFeedsInBatches.map((dataFeedBatch) => {
          // fill preProcessingObject
          if (dataFeedBatch.length <= 1) {
            const dataFeedName = dataFeedBatch[0];
            const targetDataFeedBlueprint = allDataFeedBlueprints.find((ap) => ap.name === dataFeedName);
            preProcessingObject[dataFeedName] = {
              path: targetDataFeedBlueprint.path,
              parameters: targetDataFeedBlueprint.parameters
            };
          } else {
            const parametersToAccumulate = parametersToAccumulateForEachApi[oisTitle];
            const accumulatedParameters = parametersToAccumulate.map((parameterName) => {
              const accumulatedParameter = dataFeedBatch.map((dataFeedName) => {
                const targetDataFeedBlueprint = allDataFeedBlueprints.find((dfb) => dfb.name === dataFeedName);
                return targetDataFeedBlueprint.parameters[parameterName];
              });
              return { parameterName, accumulatedParameter };
            });
            dataFeedBatch.map((dataFeedName) => {
              const targetDataFeedBlueprint = allDataFeedBlueprints.find((dfb) => dfb.name === dataFeedName);
              const parameters: Record<string, string> = {};
              accumulatedParameters.forEach((item) => {
                const { parameterName, accumulatedParameter } = item;
                parameters[parameterName] = accumulatedParameter.join(',');
              });
              Object.keys(targetDataFeedBlueprint.parameters).map((parameterName) => {
                if (!parametersToAccumulateForEachApi[oisTitle].includes(parameterName)) {
                  parameters[parameterName] = targetDataFeedBlueprint.parameters[parameterName];
                }
              });

              preProcessingObject[dataFeedName] = {
                path: targetDataFeedBlueprint.path,
                parameters: parameters
              };
            });
          }
        });

        // fill postProcessingObject
        const allFeeds = dataFeedsInBatches.flat(2);
        allFeeds.forEach((dataFeedName) => {
          const targetDataFeedBlueprint = allDataFeedBlueprints.find((ap) => ap.name === dataFeedName);
          postProcessingObject[dataFeedName] = targetDataFeedBlueprint.parser;
        });

        // fill pre/post processing fields
        const targetOis = oises.find((ois) => ois.title === oisTitle);
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

        saveJson(`${APIS_ROOT}/${apiAlias}/oises/${oisFileName}.json`, targetOis);
      });
    })
  );
};

main();
