/*

  Checks file tree of ./data/apis.

*/

import dirTree from 'directory-tree';
import { Logger, ILogObj } from 'tslog';
import { difference } from 'lodash';
import { readJson } from '../config-generation/config-utils';
import { oisSchema } from '@api3/ois';
import { apiDataSchema } from '../types';

function main() {
  const logger: Logger<ILogObj> = new Logger();
  const tree = dirTree('./data/apis');

  let issues = [];

  tree.children
    .filter((apiFolder) => apiFolder.name !== 'demo')
    .map((apiFolder) => {
      const apiName = apiFolder.name;

      logger.info(`Checking: ${apiName}`);
      apiFolder.children.map((apiFolderContent) => {
        switch (apiFolderContent.name) {
          case 'deployments': {
            const existingFolderNames = apiFolder.children
              .find((apiFolderContent) => apiFolderContent.name === 'deployments')
              .children.map((deploymentFolderContent) => deploymentFolderContent.name);
            const requiredFolderNames = ['staging-deployments', 'candidate-deployments', 'active-deployments'];
            const diff = difference(existingFolderNames, requiredFolderNames);
            if(diff.length > 0) {
              issues.push(`${apiName} - folder is missing in 'deployments' ${diff}`);
            }
            break;
          }

          case 'oises': {
            if (apiFolderContent.children.length <= 0) {
              issues.push(`${apiName} - No OIS found.`);
            }
            apiFolderContent.children.map((oisFolderContent) => {
              try {
                oisSchema.parse(readJson(oisFolderContent.path));
              } catch (err) {
                issues.push(`${apiName} - Couldn't parse the OIS. Error: ${err}`);
              }
            });
            break;
          }

          case 'api-data.json': {
            try {
              apiDataSchema.parse(readJson(apiFolderContent.path));
            } catch (err) {
              issues.push(`${apiName} - Couldn't parse the 'api-data.json'. Error: ${err}`);
            }

            break;
          }
        }
      });
    });

  if (issues.length === 0) {
    logger.info('No issues found.');
  } else {
    throw Error(`There are problems with 'apis' folders integrity. Issues:\n ${JSON.stringify(issues, null, 2)}`);
  }
}

main();
