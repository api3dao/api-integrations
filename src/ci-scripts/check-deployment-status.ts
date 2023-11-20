/*

Retrieves pusher logs and checks the deployments.

*/

import { readdirSync } from 'fs';
import { ethers } from 'ethers';
import { globSync } from 'glob';
import axios from 'axios';
import { readJson } from '../config-generation/config-utils';
import { apiDataSchema } from '../types';

export interface HeartbeatPayload {
  airnode: string;
  stage: string;
  nodeVersion: string;
  currentTimestamp: string;
  deploymentTimestamp: string;
  configHash: string;
  signature: string;
}

async function checkDeployments(deployments: any[], apiName: string, apiData: any, deploymentType: string) {
  apiData = apiDataSchema.parse(apiData);

  const issues = [];
  await Promise.all(
    deployments.map(async (deploymentJson) => {
      const configHash = createHash(JSON.stringify(deploymentJson));
      const deploymentStatus: HeartbeatPayload[] = await getDeploymentStatus(apiData.airnode);

      const targetDeploymentStatus = deploymentStatus.find(
        (targetDeploymentStatus) => targetDeploymentStatus.configHash === configHash
      );
      if (targetDeploymentStatus === undefined) {
        issues.push(`${apiName}/${deploymentType} - Couldn't find live deployment.`);
      } else {
        const now = Math.floor(Date.now() / 1000);

        // check timestamp
        if (Math.abs(now - parseInt(targetDeploymentStatus.currentTimestamp)) > ONE_MINUTE_IN_SECONS) {
          issues.push(`${apiName}/${deploymentType} - Heartbeat is old!`);
        }

        // check heartbeat signature
        const unsignedHeartbeatPayload = {
          airnode: targetDeploymentStatus.airnode,
          stage: targetDeploymentStatus.stage,
          nodeVersion: targetDeploymentStatus.nodeVersion,
          currentTimestamp: targetDeploymentStatus.currentTimestamp,
          deploymentTimestamp: targetDeploymentStatus.deploymentTimestamp,
          configHash: targetDeploymentStatus.configHash
        };
        const message = ethers.utils.arrayify(
          createHash(stringifyUnsignedHeartbeatPayload(unsignedHeartbeatPayload))
        );
        const signatureResult = ethers.utils.verifyMessage(message, targetDeploymentStatus.signature);
        if (apiData.airnode !== signatureResult) {
          issues.push(`${apiName}/${deploymentType} - Couldn't verify heartbeat signature!`);
        }
      }
    })
  );

  return issues;
}

async function getDeploymentStatus(airnodeAddress: string) {
  const response = await axios.get(
    `https://integration.nodary.io/deploymentStatus?airnode=${airnodeAddress}&app=pusher`
  );
  return response.data;
}

export const stringifyUnsignedHeartbeatPayload = (unsignedHeartbeatPayload: Omit<HeartbeatPayload, 'signature'>) =>
  JSON.stringify(unsignedHeartbeatPayload, Object.keys(unsignedHeartbeatPayload).sort());

const createHash = (value: string) => ethers.utils.keccak256(ethers.utils.toUtf8Bytes(value));

const ONE_MINUTE_IN_SECONS = 60;

async function main() {
  const issues: any[] = [];

  const apiNames = readdirSync('./data/apis/').filter((pth) => !pth.includes('demo'));

  for (let apiIndex = 0; apiIndex < apiNames.length; apiIndex++) {
    const apiName = apiNames[apiIndex];
    const apiData = apiDataSchema.parse(readJson(`./data/apis/${apiName}/api-data.json`));

    // ----- Read deployment files -----
    const stagingDeployments = globSync(`./data/apis/${apiName}/deployments/staging-deployments/*.json`).map((pth) =>
      readJson(pth)
    );
    const candidateDeployments = globSync(`./data/apis/${apiName}/deployments/candidate-deployments/*.json`).map(
      (pth) => readJson(pth)
    );
    const activeDeployments = globSync(`./data/apis/${apiName}/deployments/active-deployments/*.json`).map((pth) =>
      readJson(pth)
    );

    // ----- Check deployment status -----
    const stagingIssues = await checkDeployments(stagingDeployments, apiName, apiData, 'staging');
    const candidateIssues = await checkDeployments(candidateDeployments, apiName, apiData, 'candidate');
    const activeIssues = await checkDeployments(activeDeployments, apiName, apiData, 'active');

    const _issues = {};
    _issues[apiName] = [...stagingIssues, ...candidateIssues, ...activeIssues];
    issues.push(_issues);
  }

  if (issues.length > 0) {
    throw Error(`Issues found:\n${JSON.stringify(issues, null, 2)}`);
  }
}

main();
