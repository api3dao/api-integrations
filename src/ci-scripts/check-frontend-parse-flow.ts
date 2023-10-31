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
  pusherConfig: Feed[];
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

      let final = [];

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

async function parse() {
  try {
    const apiPaths = globSync('./data/apis/*').filter((item) => !item.includes('mock'));

    let providers = [];
    let preProcessingSpecifications = [];
    let postProcessingSpecifications = [];
    let apiSpecifications = [];
    let endpointParameters = [];
    let totalOises = 0;

    apiPaths.map((path) => {
      const oises: OIS[] = globSync(`${path}/oises/*`).map((oisPath) => readJson(oisPath));
      logger.info('Total oises found:', oises.length, 'for', path);
      totalOises += oises.length;

      oises.map((ois) => {
        const preProcessingObject = getPreProcessingString(ois);
        const postProcessingObject = getPostProcessingString(ois);

        preProcessingSpecifications.push(preProcessingObject);
        postProcessingSpecifications.push(postProcessingObject);
        apiSpecifications.push(ois.apiSpecifications);
        endpointParameters.push(getFeedEndpointParameters(ois));
        providers.push(ois.title);
      });
    });

    //all objects will be in the same order as the ois
    let preProcessingObjects = [];
    let postProcessingObjects = [];

    // splitting the preProcessingSpecifications
    for (let i = 0; i < preProcessingSpecifications.length; i++) {
      const preProcessingObject = await cut(
        providers[i],
        preProcessingSpecifications[i],
        /{.+(" |)}(,|) },}/g,
        /["A-Z0-9]+\/[A-Z"]+: (?:\{+)(.+?)(?:(,|}) \}+)/g,
        false,
        true
      );

      logger.info(`Parsed ${providers[i]} preProcessingSpecifications`);
      preProcessingObjects.push(preProcessingObject);
    }

    // splitting the postProcessingSpecifications
    for (let i = 0; i < postProcessingSpecifications.length; i++) {
      const postProcessingObject = await cut(
        providers[i],
        postProcessingSpecifications[i],
        /{.+}/g,
        /[A-Z0-9]+\/[A-Z]+: (?:\(+)(.+?)(?:\)+) => (?:\{ +)(.+?)(?: \}+)/g,
        true,
        false
      );

      logger.info(`Parsed ${providers[i]} postProcessingSpecifications`);
      postProcessingObjects.push(postProcessingObject);
    }

    // combining the preProcessingSpecifications and postProcessingSpecifications
    const combinedDeployments = postProcessingObjects.map((provider, index) => {
      const oisTitle = providers[index];
      const apiSpec = apiSpecifications[index];
      const endpointParametersValue = endpointParameters[index];
      const pusherConfig = provider.map((item: string[]) => {
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

      return {
        oisTitle,
        apiSpec,
        pusherConfig,
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
  for (let i = 0; i < deployments.length; i++) {
    logger.info(`Checking ${deployments[i].oisTitle} path generation.`);
    for (let j = 0; j < deployments[i].pusherConfig.length; j++) {
      const feed = deployments[i].pusherConfig[j];
      const endpointParameters = deployments[i].endpointParameters;
      const apiSpec = deployments[i].apiSpec;
      getPath(endpointParameters, feed, apiSpec);
    }
    logger.info(`Checked ${deployments[i].oisTitle} path generation.`);
  }
}

async function main() {
  logger.info('##########################################################################.');
  logger.info('Parsing the preProcessingSpecifications and postProcessingSpecifications.');
  const deployments = await parse();
  logger.info('##########################################################################.');

  logger.info('##########################################################################.');
  logger.info('Checking path generation.');
  await checkPathGeneration(deployments);
  logger.info('##########################################################################.');
}

main();