import { globSync } from "glob";
import { readJson } from "./config-generation/config-utils";
import { apiDataSchema } from "./types";



export { deriveDataFeedId, deriveTemplateId, deriveEndpointId, getOisTitleByFeedNameAndAirnodeAddress } from "./config-generation/config-utils";

export function getAirnodeAddressByAlias(alias: string) {
  const apiPaths = globSync('./data/apis/*').filter((item) => !item.includes('mock'));
  let result: Record<string, string> = {};
  apiPaths.forEach((path) => {
    const apiData = apiDataSchema.parse(readJson(`${path}/api-data.json`));
    result[apiData.alias] = apiData.airnode;
  });
  return result[alias];
}

export function getApiProviderAliases() {
  const apiPaths = globSync('./data/apis/*').filter((item) => !item.includes('mock'));
  return apiPaths.map((path) => {
    const apiData = apiDataSchema.parse(readJson(`${path}/api-data.json`));
    return apiData.alias!;
  });
}




