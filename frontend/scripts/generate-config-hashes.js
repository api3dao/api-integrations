/*

  Checks file tree of ./data/apis.

*/
const fs = require('fs');
const dirTree = require('directory-tree');
const { serializePlainObject, createSha256Hash, loadConfig } = require('@api3/commons');
const { keccak256 } = require('js-sha3');

const createHash = (file) => {
  return '0x' + keccak256(JSON.stringify(file));
};

function check(apiFolderContent, apiName) {
  if (apiFolderContent.name !== 'deployments') return;

  let deployments = [];

  apiFolderContent.children.forEach((deploymentFolder) => {
    deploymentFolder.children.forEach((deploymentFolderContent) => {
      if (deploymentFolderContent.name.endsWith('.json')) {
        const loadRawConfig = loadConfig(deploymentFolderContent.path);
        const newHash = createSha256Hash(serializePlainObject(loadRawConfig));
        const oldHash = createHash(loadRawConfig);

        const deployment = {
          apiProvider: apiName,
          category: deploymentFolder.name,
          keccak256: oldHash,
          sha256: newHash
        };

        deployments.push(deployment);
      }
    });
  });

  return deployments;
}

function main() {
  const tree = dirTree('../data/apis');

  let batch = [];

  tree.children
    .filter((apiFolder) => apiFolder.name !== 'demo')
    .map((apiFolder) => {
      apiFolder.children.map((apiFolderContent) => {
        const deployments = check(apiFolderContent, apiFolder.name);
        if (deployments) {
          batch = batch.concat(deployments);
        }
      });
    });

  fs.writeFileSync('./src/data/deployments.json', JSON.stringify(batch, null, 2));
}

main();
