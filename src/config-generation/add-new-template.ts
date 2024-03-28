import * as fs from 'fs';
import { execSync } from 'child_process';
import { globSync } from 'glob';
import { Logger, ILogObj } from 'tslog';
import { OIS } from '@api3/ois';
import { readJson, saveJson } from './config-utils';
import { apiDataSchema } from './validation';
import { omit } from 'lodash';

const prompts = require('prompts');

// fix finage,kaiko,ncfx-crypto,ncfx-forex,coinpaprika
/*
--- ISSUES ---

- API SPECIFIC ISSUES - 
* finage: path parameter issue
* iexcloud: path parameter issue
* kaiko: path parameter issue
* ncfx-forex: path parameter issue
* ncfx-crypto: ???

- GENERAL ISSUES -
* How will the syncer script will now which OIS to update?

*/


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
  const targetOis = oises.find((ois) => (ois.title == selectedOisTitle));
  const feedEndpoint = targetOis.endpoints.find((e) => e.name === 'feed');
  

  const parameterNames = feedEndpoint.parameters
    .filter((p) => p.required)
    .filter((p) => Object.keys(p).includes('operationParameter'))
    .filter((p) => {
      if (selectedApiName === 'nodary' && p.name === 'name') {
        return true;
      }
      if (p.name === 'path') {
        return false;
      }
      return true;
    })
    .map((p) => p.name);

  let selectedParameters = await prompts(
    parameterNames.map((pName) => {
      return {
        type: 'text',
        name: pName,
        message: `Write the value for the parameter "${pName} (leave empty to pass)":`
      };
    })
  );

  Object.entries(selectedParameters).forEach(([key, value]) => {
    if(value === "") {
       selectedParameters = omit(selectedParameters, key);
    } 
  });

  const template = {
    name: selectedFeedName,
    templateId: '',
    endpointId: '',
    parameters: '',
    decodedParameters: Object.entries(selectedParameters).map(([parameterName, parameterValue]) => {
      return {
        name: parameterName,
        type: 'string32',
        value: parameterValue
      };
    })
  };

  const templatePath = `./data/apis/${selectedApiName}/templates/${selectedApiName} ${selectedFeedName.replace('/', '-')}.json`;
  saveJson(templatePath, template);

  logger.info(`Template saved to >> ${templatePath}`);
};

main();
