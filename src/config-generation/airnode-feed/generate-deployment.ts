import { join } from 'path';
import * as fs from 'fs';
import { execSync } from 'child_process';
import { globSync } from 'glob';
import { ethers } from 'ethers';
import { format } from 'date-fns';
import { difference } from 'lodash';
import { Logger, ILogObj } from 'tslog';
import { OIS } from '@api3/ois';
import { readJson, saveJson, extractPreProcessingObject, extractPostProcessingObject } from '../config-utils';
import { apiDataSchema } from '../validation';
import { deriveEndpointId, deriveTemplateId } from '../../index';

const prompts = require('prompts');

const main = async () => {
  const APIS_ROOT = './data/apis/';

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

  // get deploymentType
  const { deploymentType } = await prompts({
    type: 'select',
    name: 'deploymentType',
    message: 'Select the deployment type:',
    choices: [
      { title: 'staging', value: 'staging' },
      { title: 'candidate', value: 'candidate' }
    ]
  });
  console.log('deploymentType is: ', deploymentType);

  const signedApiName = `${apiName}-api3`;
  const deploymentTypeMap: Record<string, string> = {
    staging: 'stagingSignedApiUrl',
    candidate: 'productionSignedApiUrl'
  };

  // read required files
  const airnodeFeedConfig = readJson('./boilerplates/boilerplate-airnode-feed-config.json');
  const apiData = apiDataSchema.parse(readJson(`./data/apis/${apiName}/api-data.json`));

  // read oises
  const oises: OIS[] = globSync(`./data/apis/${apiName}/oises/*`).map((oisPath) => readJson(oisPath));

  // init "signedApiUpdates" triggers
  airnodeFeedConfig.triggers['signedApiUpdates'] = [];

  // push OIS objects
  oises.map((ois: OIS) => {
    airnodeFeedConfig.ois.push(ois);
  });

  // validate OIS titles in "apiData.supportedFeedsInBatches"
  const originalOisTitlesHash = ethers.utils.solidityKeccak256(
    oises.map((_o: OIS) => 'string'),
    oises.map((o: OIS) => o.title).sort()
  );
  const oisTitlesHashFromApiData = ethers.utils.solidityKeccak256(
    Object.keys(apiData.supportedFeedsInBatches).map((_ot) => 'string'),
    Object.keys(apiData.supportedFeedsInBatches).sort()
  );
  if (originalOisTitlesHash !== oisTitlesHashFromApiData) {
    logger.error('Actual OIS titles and OIS titles in api-data.json are not same!');
    logger.error('Exiting...');
    process.exit();
  }

  // validate pre/postProcessingObject
  oises.map((ois: OIS) => {
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
    const endpointId = deriveEndpointId({ oisTitle: oisTitle }) as string;
    airnodeFeedConfig.endpoints[endpointId] = {
      endpointName: 'feed',
      oisTitle: oisTitle
    };

    // add templates
    apiData.supportedFeedsInBatches[oisTitle].map((batch: string[]) => {
      const templateIds: string[] = batch.map((feedName: string) => {
        const templateId = deriveTemplateId({ oisTitle: oisTitle, feedName: feedName }) as string;
        airnodeFeedConfig.templates[templateId] = {
          endpointId: endpointId,
          parameters: [{ type: 'string32', name: 'name', value: feedName }]
        };
        return templateId as string;
      });

      // add triggers
      airnodeFeedConfig.triggers['signedApiUpdates'].push({
        signedApiName: signedApiName,
        templateIds: templateIds,
        fetchInterval: 5,
        updateDelay: 0
      });
    });
  });

  // generate signedApis
  airnodeFeedConfig.signedApis = [
    {
      name: signedApiName,
      url: apiData[deploymentTypeMap[deploymentType]]
    }
  ];

  // generate apiCredentials
  airnodeFeedConfig.apiCredentials = [];
  oises.map((ois: OIS) => {
    Object.keys(ois.apiSpecifications.components.securitySchemes).map((schemeName) => {
      airnodeFeedConfig.apiCredentials.push({
        oisTitle: ois.title,
        securitySchemeName: schemeName,
        securitySchemeValue: '${' + `${schemeName.toUpperCase()}_VALUE` + '}'
      });
    });
  });

  // derive deployment id.
  const today = format(new Date(), 'yyyyMMdd');
  const stage = `api3-${today}`;
  airnodeFeedConfig.nodeSettings.stage = '${STAGE}';

  // save the deployment
  const deploymentPath = `./data/apis/${apiName}/deployments/${deploymentType}-deployments`;
  saveJson(join(deploymentPath, `${stage}-airnode-feed.json`), airnodeFeedConfig);

  logger.info(`Generated deployment for ${apiName} with name ${stage}-airnode-feed.json.`);
};

main()
  .then(() => execSync('yarn prettier:write'))
  .catch((err) => console.error(err));
