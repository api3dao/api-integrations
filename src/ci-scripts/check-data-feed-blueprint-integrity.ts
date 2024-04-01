/*

  Checks if data feed blueprints are included in the corresponding api-data and vice-versa

*/

import fs from 'fs';
import { Logger, ILogObj } from 'tslog';
import { difference } from 'lodash';
import { readJson } from '../config-generation/config-utils';
import { globSync } from 'glob';
import { apiDataSchema } from '../types';

function main() {
  const logger: Logger<ILogObj> = new Logger();
  const APIS_ROOT = './data/apis/';

  const issues = [];

  fs.readdirSync(APIS_ROOT).map((apiAlias) => {
    const allDataFeedBlueprints = globSync(`${APIS_ROOT}/${apiAlias}/data-feed-blueprints/*`).map((path) =>
      readJson(path)
    );
    const apiData = apiDataSchema.parse(readJson(`${APIS_ROOT}/${apiAlias}/api-data.json`));

    const dataFeedWithBlueprint = allDataFeedBlueprints.map((item) => item.name);
    const supportedFeeds = Object.values(apiData.supportedFeedsInBatches).flat(2);

    const mistmatches = difference(dataFeedWithBlueprint, supportedFeeds).concat(
      difference(supportedFeeds, dataFeedWithBlueprint)
    );

    if (mistmatches.length > 0) {
      issues.push(
        `There is a mismatch between api-data and data feed blueprints. Mismatching feeds: ${JSON.stringify(mistmatches)}`
      );
    }
  });

  if (issues.length === 0) {
    logger.info('No issues found.');
  } else {
    throw Error(`Issues found between api-data and blueprints. Did you forget to run sync-ois script?. Issues:\n ${JSON.stringify(issues, null, 2)}`);
  }
}

main();
