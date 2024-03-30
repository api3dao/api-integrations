/*

Creates a new file that includes API parameters under data/apis/<api-name>/api-parameters in the below format

{
  "name": "ADA/USD",
  "parameters": {
    "quotes": "USD"
  },
  "path": "tickers/ada-cardano"
}

*/

import * as fs from 'fs';
import prettier from 'prettier';
import { globSync } from 'glob';
import { Logger, ILogObj } from 'tslog';
import { OIS } from '@api3/ois';
import { readJson, saveJson } from './config-utils';
import { apiDataSchema } from './validation';
import { omit } from 'lodash';

const prompts = require('prompts');

function removeByIndex(str: string, index: number) {
  return str.slice(0, index) + str.slice(index + 1);
}

const main = async () => {
  const APIS_ROOT = './data/apis/';

  const logger: Logger<ILogObj> = new Logger();

  // get the data feed name
  const { selectedFeedName } = await prompts({
    type: 'text',
    name: 'selectedFeedName',
    message: "Write data feed's name:"
  });

  // get the apiName
  const existingProviders = fs.readdirSync(APIS_ROOT);
  const { selectedApiName } = await prompts({
    type: 'select',
    name: 'selectedApiName',
    message: 'Select an API to create data feed:',
    choices: existingProviders.map((apiName) => {
      return { title: apiName, value: apiName };
    })
  });

  const targetApiData = apiDataSchema.parse(readJson(`./data/apis/${selectedApiName}/api-data.json`));

  // get OIS
  const { selectedOisTitle } = await prompts({
    type: 'select',
    name: 'selectedOisTitle',
    message: 'Select the OIS:',
    choices: Object.keys(targetApiData.supportedFeedsInBatches).map((title) => {
      return { title: title, value: title };
    })
  });

  const oises: OIS[] = globSync(`./data/apis/${selectedApiName}/oises/*`).map((oisPath) => readJson(oisPath));
  const targetOis = oises.find((ois) => ois.title == selectedOisTitle);
  const feedEndpoint = targetOis.endpoints.find((e) => e.name === 'feed');

  const parameterNames = feedEndpoint.parameters
    .filter((p) => p.required)
    .filter((p) => Object.keys(p).includes('operationParameter'))
    .filter((p) => {
      if (selectedApiName === 'nodary' && p.name === 'name') {
        return true;
      }
      return true;
    })
    .map((p) => p.name);

  // get parameters
  let selectedParameters = await prompts(
    parameterNames.map((pName) => {
      return {
        type: 'text',
        name: pName,
        message: `Write the value for the parameter "${pName}" (leave empty to pass)":`
      };
    })
  );

  // filter empty parameters
  Object.entries(selectedParameters).forEach(([key, value]) => {
    if (value === '') {
      selectedParameters = omit(selectedParameters, key);
    }
  });
  // remove "/" from path
  if (selectedParameters.path.startsWith('/')) {
    selectedParameters.path = selectedParameters.path.substring(1);
  }

  // get postProcessing snippet
  const { postProcessingSnippet } = await prompts({
    type: 'text',
    name: 'postProcessingSnippet',
    message: `Write post processing snippet for "${selectedFeedName}":`
  });

  const apiParameters = {
    name: selectedFeedName,
    path: selectedParameters.path,
    parameters: omit(selectedParameters, 'path'),
    // replaceAll part is required to match the snippet to the regex constraints of the frontend
    parser: removeByIndex(
      await prettier.format(postProcessingSnippet, { semi: false, parser: 'meriyah' }),
      0
    ).replaceAll(/\n/g, '\n        ')
  };

  const apiParametersPath = `./data/apis/${selectedApiName}/api-parameters/${selectedApiName} ${selectedFeedName.replace('/', '-')}.json`;
  saveJson(apiParametersPath, apiParameters);

  logger.info(`apiParameters saved to >> ${apiParametersPath}`);
};

main();
