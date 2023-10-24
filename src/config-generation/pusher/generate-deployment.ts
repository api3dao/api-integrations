import { join } from 'path';
import { globSync } from 'glob';
import { ethers } from 'ethers';
import { format } from 'date-fns';
import { difference } from 'lodash';
import { Logger, ILogObj } from 'tslog';
import { OIS } from '@api3/ois';
import {
  deriveEndpointId,
  deriveTemplateId,
  readJson,
  saveJson,
  extractPreProcessingObject,
  extractPostProcessingObject
} from '../config-utils';

import * as fs from 'fs';

const prompts = require('prompts');

const main = async () => {
  const APIS_ROOT = './data/apis/';
  const configGenerationTimestamp = Math.floor(Date.now() / 1000);

  const logger: Logger<ILogObj> = new Logger();

  // get the apiName
  const existingProviders = fs.readdirSync(APIS_ROOT);
  const { apiName } = await prompts({
    type: 'select',
    name: 'apiName',
    message: 'Select an API to create deployment:',
    choices: existingProviders.map((apiName) => {
      return { title: apiName, value: apiName };
    })
  });

  // read required files
  let pusherConfig = readJson('./boilerplates/boilerplate-pusher-config.json');
  const apiData = readJson(`./data/apis/${apiName}/api-data.json`);

  // read oises
  const oises: OIS[] = globSync(`./data/apis/${apiName}/oises/*`).map((oisPath) => readJson(oisPath));

  // init "signedApiUpdates" triggers
  pusherConfig.triggers['signedApiUpdates'] = [];

  // generate rateLimiting object & push OIS objects
  oises.map((ois) => {
    pusherConfig.rateLimiting[ois.title] = { maxConcurrency: 25, minTime: 10 };
    pusherConfig.ois.push(ois);
  });

  // validate OIS titles in "apiData.supportedFeedsInBatches"
  const originalOisTitlesHash = ethers.utils.solidityKeccak256(
    oises.map((o) => 'string'),
    oises.map((o) => o.title).sort()
  );
  const oisTitlesHashFromApiData = ethers.utils.solidityKeccak256(
    Object.keys(apiData.supportedFeedsInBatches).map((ot) => 'string'),
    Object.keys(apiData.supportedFeedsInBatches).sort()
  );
  if (originalOisTitlesHash !== oisTitlesHashFromApiData) {
    logger.error('Actual OIS titles and OIS titles in api-data.json are not same!');
    logger.error('Exiting...');
    process.exit();
  }

  // validate pre/postProcessingObject
  oises.map((ois) => {
    const supportedFeeds = apiData.supportedFeedsInBatches[ois.title].flat();

    // validate preProcessingObject & supported feeds
    const preProcessingObject = extractPreProcessingObject(ois);
    const feedsInPreProcessingObject = Object.keys(preProcessingObject);
    const mismatchPreSupp = difference(feedsInPreProcessingObject, supportedFeeds).concat(
      difference(supportedFeeds, feedsInPreProcessingObject)
    );
    if (mismatchPreSupp.length !== 0) {
      logger.error(`Mismatch between supported feeds and preProcessingObject >> ${JSON.stringify(mismatchPreSupp)}`);
    }

    // validate postProcessingObject & supported feeds
    const postProcessingObject = extractPostProcessingObject(ois);
    const feedsInPostProcessingObject = Object.keys(postProcessingObject);
    const mismatchPostSupp = difference(feedsInPostProcessingObject, supportedFeeds).concat(
      difference(supportedFeeds, feedsInPostProcessingObject)
    );
    if (mismatchPostSupp.length !== 0) {
      logger.error(`Mismatch between supported feeds and postProcessingObject >> ${JSON.stringify(mismatchPostSupp)}`);
    }

    // validate preProcessingObject & postProcessingObject (might not be necessary)
    const mismatchPrePost = difference(feedsInPostProcessingObject, feedsInPreProcessingObject).concat(
      difference(feedsInPreProcessingObject, feedsInPostProcessingObject)
    );
    if (mismatchPostSupp.length !== 0) {
      logger.error(
        `Mismatch between postProcessingObject and preProcessingObject >> ${JSON.stringify(mismatchPrePost)}`
      );
    }
  });

  // generate templates
  Object.keys(apiData.supportedFeedsInBatches).map((oisTitle) => {
    // add endpoints
    const endpointId = deriveEndpointId(oisTitle);
    pusherConfig.endpoints[endpointId] = {
      endpointName: 'feed',
      oisTitle: oisTitle
    };

    // add templates
    apiData.supportedFeedsInBatches[oisTitle].map((batch: string[]) => {
      const templateIds: string[] = batch.map((feedName: string) => {
        const templateId = deriveTemplateId(oisTitle, feedName);
        pusherConfig.templates[templateId] = {
          endpointId: endpointId,
          parameters: [{ type: 'string32', name: 'name', value: feedName }]
        };
        return templateId;
      });

      // add triggers
      pusherConfig.triggers['signedApiUpdates'].push({
        signedApiName: 'Nodary',
        templateIds: templateIds,
        fetchInterval: 5,
        updateDelay: 0
      });
    });
  });

  // generate signedApis
  pusherConfig.signedApis = [
    {
      name: 'Nodary',
      url: 'https://pool.nodary.io'
    }
  ];

  // generate apiCredentials
  pusherConfig.apiCredentials = [];
  oises.map((ois) => {
    Object.keys(ois.apiSpecifications.components.securitySchemes).map((schemeName) => {
      pusherConfig.apiCredentials.push({
        oisTitle: ois.title,
        securitySchemeName: schemeName,
        securitySchemeValue: '${' + `${schemeName.toUpperCase()}_VALUE` + '}'
      });
    });
  });

  // derive deployment id
  const today = format(new Date(), 'yyyyMMdd');
  const stage = `api3-${today}-pusher`;
  pusherConfig.stage = stage;

  // save the deployment
  const deploymentPath = `./data/apis/${apiName}/deployments/candidate-deployments`;
  saveJson(join(deploymentPath, `${stage}-pusher.json`), pusherConfig);

  logger.info(`Generated deployment for ${apiName} with name ${stage}-pusher.json.`);
};

main();
