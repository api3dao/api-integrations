import { OIS, Endpoint } from '@api3/ois';
import { ethers } from 'ethers';
import { encode } from '@api3/airnode-abi';
import { apiDataSchema } from './validation';
import oisTitles from '../../data/oisTitles.json';
import * as fs from 'fs';
import { apisData } from '../generated/apis';


export function getOisTitleWithAirnodeAddress(airnodeAddress: string) {
  return (oisTitles as Record<string, string[]>)[airnodeAddress];
}

export function getOisTitleByFeedNameAndAirnodeAddress(feedName: string, airnodeAddress) {
  const apis = Object.values(apisData);
  const targetApiData = apis.find((a) => a.airnode === airnodeAddress);
  if (!targetApiData) {
    throw Error(`Couldn't find any API with Airnode address ${airnodeAddress}`);
  }

  // find which OIS includes the data feed
  const targetOisTitle = Object.keys(targetApiData.supportedFeedsInBatches).find((oisTitle) => {
    return targetApiData.supportedFeedsInBatches[oisTitle].flat().includes(feedName);
  });

  if (!targetOisTitle) {
    throw Error(`Data feed ${feedName} does not exists in any OIS.`);
  }

  return targetOisTitle;
}

export function deriveDataFeedId(feedName: string, airnodeAddress: string) {
  const targetOisTitle = getOisTitleByFeedNameAndAirnodeAddress(feedName, airnodeAddress);
  const templateId = deriveTemplateId({ oisTitle: targetOisTitle, feedName: feedName });
  return ethers.utils.solidityKeccak256(['address', 'bytes32'], [airnodeAddress, templateId]);
}

export function deriveTemplateId(inputs: { feedName: string; oisTitle?: string; airnodeAddress?: string }) {
  const { feedName, oisTitle, airnodeAddress } = inputs;

  if (oisTitle) {
    const endpointId = deriveEndpointId({ oisTitle: oisTitle });
    const parameters = encode([{ name: 'name', type: 'string32', value: feedName }]);
    return ethers.utils.solidityKeccak256(['bytes32', 'bytes'], [endpointId, parameters]);
  }

  const targetOisTitle = getOisTitleByFeedNameAndAirnodeAddress(feedName, airnodeAddress);
  const parameters = encode([{ name: 'name', type: 'string32', value: feedName }]);
  const endpointId = deriveEndpointId({ oisTitle: targetOisTitle });
  return ethers.utils.solidityKeccak256(['bytes32', 'bytes'], [endpointId, parameters]);
}

export function deriveEndpointId(input: { oisTitle?: string; airnodeAddress?: string }): string | string[] {
  const endpointName = 'feed';
  const { oisTitle, airnodeAddress } = input;

  if (oisTitle) {
    const existingOisTitles = Object.values(oisTitles).flat();
    if (existingOisTitles.includes(oisTitle)) {
      return ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(['string', 'string'], [oisTitle, endpointName])
      );
    } else {
      throw Error(`Can't derive endpoint ID. The OIS title ${oisTitle} is not existing in the current OISes!`);
    }
  }

  if (airnodeAddress) {
    const existingAirnodeAddresses = Object.keys(oisTitles);

    if (existingAirnodeAddresses.includes(airnodeAddress)) {
      const targetOisTitles = getOisTitleWithAirnodeAddress(airnodeAddress);
      const endpointIds = targetOisTitles.map((title: string) => {
        return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['string', 'string'], [title, endpointName]));
      });
      return endpointIds;
    } else {
      throw Error(
        `Can't derive endpoint ID. The Airnode Address ${airnodeAddress} is not existing in the current Airnode addresses!`
      );
    }
  }

  throw Error("Must set an 'airnodeAddress' or 'oisTitle'!");
}

export function readJson(path: string) {
  const file = JSON.parse(fs.readFileSync(path).toString());
  return file;
}

export function saveJson(path: string, jsonObject: object) {
  const strJson = JSON.stringify(jsonObject, null, 2);
  fs.writeFileSync(path, strJson);
}

export function mkdirIfDoesntExists(path: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

// if contents of preProcessing change this function might require changes in .replace (!!!)
export function extractPreProcessingObject(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  const preProcValue = feedEndpoint!
    .preProcessingSpecifications![0].value.replace('path: preProcessingObject[endpointParameters.name].path,', '')
    .replace('...preProcessingObject[endpointParameters.name].parameters,', '');
  const evaluated = Function(
    'endpointParameters',
    'input',
    'output',
    preProcValue.replace('output = parser(input)', '') + 'return preProcessingObject;'
  );
  return evaluated({ name: '' }, '', '');
}

// if contents of postProcessing change this function might require changes in .replace (!!!)
export function extractPostProcessingObject(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  const postProcValue = feedEndpoint!.postProcessingSpecifications![0].value.replace('output = parser(input)', '');
  const evaluated = Function('endpointParameters', 'input', 'output', postProcValue + 'return postProcessingObject;');
  return evaluated({ name: '' }, '', '');
}

export function getPreProcessingString(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  return feedEndpoint!.preProcessingSpecifications;
}

export function getPostProcessingString(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  return feedEndpoint!.postProcessingSpecifications;
}

export function getFeedEndpointParameters(ois: OIS) {
  return ois.endpoints.filter((e: Endpoint) => e.name === 'feed')[0].parameters;
}

export function getDecodedParameters(feedName: string) {
  return [{ name: 'name', type: 'string32', value: feedName }]
}