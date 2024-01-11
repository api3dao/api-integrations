import { ethers } from 'ethers';
import { encode } from '@api3/airnode-abi';
import _ from 'lodash';
import { apisData } from './generated/apis';
import oisTitles from '../data/oisTitles.json';

export { apisData } from './generated/apis';

const MAX_POSSIBLE_DEPTH = 10;

export function getDecodedParameters(feedName: string) {
  return [{ name: 'name', type: 'string32', value: feedName }];
}

export function getAirnodeAddressByAlias(alias: string) {
  return apisData[alias].airnode;
}

export function getApiProviderAliases() {
  return Object.values(apisData).map((d) => d.alias);
}

export function getOisTitlesWithAirnodeAddress(airnodeAddress: string) {
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
      const targetOisTitles = getOisTitlesWithAirnodeAddress(airnodeAddress);
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

export function getSupportedProvidersForDataFeed(dataFeedName: string) {
  return Object.values(apisData)
    .filter((apiData) => {
      const dataFeeds = Object.values(apiData.supportedFeedsInBatches)
        .map((feeds) => feeds)
        .flat(MAX_POSSIBLE_DEPTH);
      if (dataFeeds.includes(dataFeedName)) {
        return true;
      }
      return false;
    })
    .map((apiData) => apiData.alias);
}

export function getAllDataFeeds() {
  const allFeeds = Object.values(apisData)
    .map((apiData) => {
      const dataFeeds = Object.values(apiData.supportedFeedsInBatches)
        .map((feeds) => feeds)
        .flat(MAX_POSSIBLE_DEPTH);
      return dataFeeds;
    })
    .flat(MAX_POSSIBLE_DEPTH);

  const uniqueFeeds = _.uniq(allFeeds);
  return uniqueFeeds;
}

export function getApiUrls(airnodeAddress: string) {
  const targetApiData = Object.values(apisData).find((apiData) => apiData.airnode === airnodeAddress);
  if (!targetApiData) {
    throw `Couldn't find the Airnode address ${airnodeAddress}!`;
  }

  return {
    name: targetApiData.name,
    alias: targetApiData.alias,
    officialUrl: targetApiData.officialUrl,
    verifiedUrl: targetApiData.verifiedUrl
  };
}
