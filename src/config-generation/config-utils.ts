import * as fs from 'fs';
import * as crypto from "crypto";
import { ethers } from "ethers";
import { encode } from "@api3/airnode-abi";


export function deriveDataFeedId(oisTitle: string, dapiName: string, airnodeAddress: string) {
  const templateId = deriveTemplateId(oisTitle, dapiName);
  return ethers.utils.solidityKeccak256(['address', 'bytes32'], [airnodeAddress, templateId]);
}

export function deriveTemplateId(oisTitle: string, dapiName: string) {
  const endpointId = deriveEndpointId(oisTitle);
  const parameters = encode([{ "name": "name", "type": "string32", "value": dapiName }]);
  return ethers.utils.solidityKeccak256(['bytes32', 'bytes'], [endpointId, parameters]);
}

export function deriveEndpointId(oisTitle: string) {
  const endpointName = "feed";
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(['string', 'string'], [oisTitle, endpointName])
  );
}

export function readJson(path: string) {
  let file = JSON.parse(fs.readFileSync(path).toString());
  return file;
}

export function saveJson(path: string, jsonObject: object) {
  let strJson = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(path, strJson);
}

export function mkdirIfDoesntExists(path: string) {
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

export function deriveDeploymentId(configGenerationTimestamp: number, airnodeAddress: string) {
  const DEPLOYMENT_ID_LENGTH = 8;
  return crypto
  .createHash("sha256")
  .update([configGenerationTimestamp, airnodeAddress, ].join(''))
  .digest("hex")
  .substring(0, DEPLOYMENT_ID_LENGTH);
}