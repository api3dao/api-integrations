import { apisData } from './generated/apis';



export { apisData } from "./generated/apis";
export {
  deriveDataFeedId,
  deriveTemplateId,
  deriveEndpointId,
  getOisTitleByFeedNameAndAirnodeAddress,
  getDecodedParameters
} from './config-generation/config-utils';

export function getAirnodeAddressByAlias(alias: string) {
  return apisData[alias].airnodeAddress;
}

export function getApiProviderAliases() {
  Object.values(apisData).map((d) => d.alias);
}

//tsc -p tsconfig.build.json 
