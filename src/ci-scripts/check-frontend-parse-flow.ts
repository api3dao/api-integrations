import { globSync } from 'glob';
import { OIS, EndpointParameter, ApiSpecification } from '@api3/ois';
import { Logger, ILogObj } from 'tslog';

import * as prettier from 'prettier/standalone';
import tsBabel = require('prettier/plugins/babel');
import tsEstree = require('prettier/plugins/estree');

import {
  getPreProcessingString,
  getFeedEndpointParameters,
  readJson,
  getPostProcessingString
} from '../config-generation/config-utils';

export interface Parameters {
  path: string;
  parameters: any[];
}

export interface Feed {
  feed: string;
  code: string;
  preProcessingSpecificationsValue: Parameters;
}

export interface Deployments {
  oisTitle: string;
  apiSpec: ApiSpecification;
  airnodeFeedConfig: Feed[];
  endpointParameters: EndpointParameter[];
}

const logger: Logger<ILogObj> = new Logger();

async function formatCode(code: string, parser: string): Promise<string> {
  try {
    const options = {
      semi: true,
      parser: parser,
      plugins: [tsEstree, tsBabel]
    };

    return await prettier.format(code, options);
  } catch (error) {
    throw Error(`formatCode >> ${error}`);
  }
}

async function jsonify(object: string) {
  try {
    const formattedJson = formatCode(object, 'json');
    return JSON.parse(await formattedJson);
  } catch (error) {
    throw Error(`jsonify >> ${error}`);
  }
}

async function cut(
  provider: string,
  object: any[],
  initialMatch: RegExp,
  finalMatch: RegExp,
  replaceQuotes: boolean = true,
  json: boolean = false
): Promise<any> {
  try {
    const newObject = object.map((code) => {
      const val = code.value as string;

      let sanitized = val.replaceAll(/(\n)/g, '');
      sanitized = sanitized.replace(/ +(?= )/g, '');
      const object = sanitized.match(initialMatch);
      let filtered = replaceQuotes ? object[0].replaceAll(/(\\n)|(\\)|(")/g, '') : object[0].replaceAll(/(\\n)/g, '');

      filtered = filtered.replace(/ +(?= )/g, '');
      return filtered;
    });

    if (json) {
      return await jsonify(newObject[0]);
    } else {
      if (newObject == null || newObject === undefined)
        throw Error(`newObject is null or undefined for provider: ${provider}`);
      const splitParanthesis = newObject[0].match(finalMatch);

      const final = [];

      for (let i = 0; i < splitParanthesis.length; i++) {
        const split = splitParanthesis[i].split(/:(.*)/s);
        final.push(split);
      }
      return final;
    }
  } catch (error) {
    throw Error(`cut >> ${error} for provider: ${provider}`);
  }
}

function checkLogo(alias: string) {
  const logoPathSVG = `./frontend/public/providers/${alias}.svg`;
  const logoPathPNG = `./frontend/public/providers/${alias}.png`;

  if (!globSync([logoPathSVG, logoPathPNG]).length) {
    throw Error(`Logo not found for ${alias}`);
  }
}

async function parse() {
  try {
    const apiPaths = globSync('./data/apis/*').filter((item) => !item.includes('mock'));

    const providers = [] as string[];
    const preProcessingSpecifications = [];
    const postProcessingSpecifications = [];
    const apiSpecifications = [];
    const endpointParameters = [];
    let totalOises = 0;
    const apiDatas = [];

    apiPaths.map((path) => {
      const apiData = readJson(`${path}/api-data.json`);
      const oises: OIS[] = globSync(`${path}/oises/*`).map((oisPath) => readJson(oisPath));
      logger.info('Total oises found:', oises.length, 'for', path);
      totalOises += oises.length;

      checkLogo(apiData.alias);

      oises.map((ois) => {
        const preProcessingObject = getPreProcessingString(ois);
        const postProcessingObject = getPostProcessingString(ois);

        preProcessingSpecifications.push(preProcessingObject);
        postProcessingSpecifications.push(postProcessingObject);
        apiSpecifications.push(ois.apiSpecifications);
        endpointParameters.push(getFeedEndpointParameters(ois));
        providers.push(ois.title);
        apiDatas.push(apiData);
      });
    });

    // splitting the preProcessingSpecifications
    const processPreProcessing = async (provider: string, spec: any[]) => {
      const preProcessingObject = await cut(
        provider,
        spec,
        /{.+(" |)}(,|) },}/g,
        /["aA-zZ0-9]+\/[a-zA-Z0-9 "]+: (?:\{+)(.+?)(?:(,|}) \}+)/g,
        false,
        true
      );

      logger.info(`Parsed ${provider} preProcessingSpecifications`);
      return preProcessingObject;
    };

    const preProcessingObjects = await Promise.all(
      preProcessingSpecifications.map(async (spec, i) => {
        return processPreProcessing(providers[i], spec);
      })
    );

    // splitting the postProcessingSpecifications
    const processPostProcessing = async (provider: string, spec: any[]) => {
      const postProcessingObject = await cut(
        provider,
        spec,
        /{.+}/g,
        /[aA-zZ0-9]+\/[aA-zZ0-9 ]+: (?:\(+)(.+?)(?:\)+) => (?:\{ +)(.+?)(?: \}+)/g,
        true,
        false
      );

      logger.info(`Parsed ${provider} postProcessingSpecifications`);
      return postProcessingObject;
    };

    const postProcessingObjects = await Promise.all(
      postProcessingSpecifications.map(async (spec, i) => {
        return processPostProcessing(providers[i], spec);
      })
    );

    // combining the preProcessingSpecifications and postProcessingSpecifications
    const combinedDeployments = postProcessingObjects.map((provider, index) => {
      const oisTitle = providers[index];
      const apiSpec = apiSpecifications[index];
      const endpointParametersValue = endpointParameters[index];
      const airnodeFeedConfig = provider.map((item: string[]) => {
        const feed = item[0];
        const code = item[1];
        const preProcessingSpecificationsValue = preProcessingObjects[index][feed];

        // if preProcessingSpecificationsValue is null then parsing failed
        if (preProcessingSpecificationsValue == null || preProcessingSpecificationsValue === undefined) {
          throw Error(`preProcessingSpecificationsValue is null or undefined for feed: ${feed}`);
        }

        return {
          feed,
          code,
          preProcessingSpecificationsValue
        };
      });

      const supportedFeeds = apiDatas[index].supportedFeedsInBatches[oisTitle].flat();

      const excludedFeeds = supportedFeeds.filter((feed: string) => {
        const found = airnodeFeedConfig.filter((config: Feed) => config.feed === feed);
        return found.length === 0;
      });

      if (excludedFeeds.length > 0) {
        throw Error(
          `Excluded feeds: ${excludedFeeds} for ${oisTitle}. Please check if you have added the feed in the postProcessingSpecifications.`
        );
      }

      return {
        oisTitle,
        apiSpec,
        airnodeFeedConfig,
        endpointParameters: endpointParametersValue
      };
    });

    if (combinedDeployments.length !== totalOises) {
      throw Error(`Not all oises were parsed. Expected: ${totalOises}, got: ${combinedDeployments.length}`);
    }

    logger.info('No issues in pre-post processing parse.');

    return combinedDeployments;
  } catch (error) {
    throw Error(`parse >> ${error}`);
  }
}

function getPath(endpointParameters: EndpointParameter[], feed: Feed, apiSpec: ApiSpecification) {
  try {
    const parameters = feed.preProcessingSpecificationsValue;
    if (parameters === undefined) return null;

    const servers = apiSpec.servers;
    if (servers.length === 0) return parameters.path;

    const server = servers[0];
    const url = server.url;

    let path = parameters.path;
    let queryString = '?';

    Object.keys(parameters.parameters).forEach((key) => {
      const parameterIn = endpointParameters.filter((item) => item.name === key)[0].operationParameter;

      switch (parameterIn.in) {
        case 'path':
          path += parameters[key];
          break;
        case 'query':
          queryString += `${parameterIn.name}=${parameters.parameters[key]}&`;
          break;
        default:
          break;
      }
    });

    queryString = queryString.substring(0, queryString.length - 1);

    const pathWithBase = url + '/' + path + queryString;

    return pathWithBase;
  } catch (error) {
    throw Error(`getPath >> ${error}`);
  }
}

async function checkPathGeneration(deployments: Deployments[]) {
  deployments.map((deployment) => {
    logger.info(`Checking ${deployment.oisTitle} path generation.`);
    deployment.airnodeFeedConfig.map((feed) => {
      const { endpointParameters, apiSpec } = deployment;
      getPath(endpointParameters, feed, apiSpec);
    });
    logger.info(`Checked ${deployment.oisTitle} path generation.`);
  });
}

async function main() {
  logger.info('##########################################################################.');
  logger.info('Parse preProcessingSpecifications and postProcessingSpecifications.');
  const deployments = await parse();
  logger.info('##########################################################################.');

  logger.info('##########################################################################.');
  logger.info('Check path generation.');
  await checkPathGeneration(deployments);
  logger.info('##########################################################################.');
}

main();
