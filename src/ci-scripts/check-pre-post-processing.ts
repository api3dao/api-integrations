/*

  Compares pre/post-processing objects inside of "feed" endpoint of OIS and supported feeds inside apis-data.json.

*/

import { globSync } from 'glob';
import { OIS } from '@api3/ois';
import { difference } from 'lodash';
import { Logger, ILogObj } from 'tslog';

import { extractPostProcessingObject, extractPreProcessingObject, readJson } from '../config-generation/config-utils';

function main() {
  const logger: Logger<ILogObj> = new Logger();

  const apiPaths = globSync('./data/apis/*').filter((item) => !item.includes('mock'));

  apiPaths.map((path) => {
    const apiData = readJson(`${path}/api-data.json`);
    const oises: OIS[] = globSync(`${path}/oises/*`).map((oisPath) => readJson(oisPath));
    oises.map((ois) => {
      const supportedFeeds = apiData.supportedFeedsInBatches[ois.title].flat();

      // validate preProcessingObject & supported feeds
      const preProcessingObject = extractPreProcessingObject(ois);
      const feedsInPreProcessingObject = Object.keys(preProcessingObject);
      const mismatchPreSupp = difference(feedsInPreProcessingObject, supportedFeeds).concat(
        difference(supportedFeeds, feedsInPreProcessingObject)
      );
      if (mismatchPreSupp.length !== 0) {
        logger.error(
          `Mismatch between supported feeds and preProcessingObject ${apiData.alias} >> ${JSON.stringify(
            mismatchPreSupp
          )}`
        );
        throw Error(
          `Mismatch between supported feeds and preProcessingObject ${apiData.alias} >> ${JSON.stringify(
            mismatchPreSupp
          )}`
        );
      }

      // validate postProcessingObject & supported feeds
      const postProcessingObject = extractPostProcessingObject(ois);
      const feedsInPostProcessingObject = Object.keys(postProcessingObject);
      const mismatchPostSupp = difference(feedsInPostProcessingObject, supportedFeeds).concat(
        difference(supportedFeeds, feedsInPostProcessingObject)
      );
      if (mismatchPostSupp.length !== 0) {
        logger.error(
          `Mismatch between supported feeds and postProcessingObject ${apiData.alias} >> ${JSON.stringify(
            mismatchPostSupp
          )}`
        );
        throw Error(
          `Mismatch between supported feeds and postProcessingObject ${apiData.alias} >> ${JSON.stringify(
            mismatchPostSupp
          )}`
        );
      }

      // validate preProcessingObject & postProcessingObject (might not be necessary)
      const mismatchPrePost = difference(feedsInPostProcessingObject, feedsInPreProcessingObject).concat(
        difference(feedsInPreProcessingObject, feedsInPostProcessingObject)
      );
      if (mismatchPostSupp.length !== 0) {
        logger.error(
          `Mismatch between postProcessingObject and preProcessingObject >> ${apiData.alias} ${JSON.stringify(
            mismatchPrePost
          )}`
        );
        throw Error(
          `Mismatch between postProcessingObject and preProcessingObject >> ${apiData.alias} ${JSON.stringify(
            mismatchPrePost
          )}`
        );
      }
    });
  });

  logger.info('No issues in pre-post processing.');
}

main();
