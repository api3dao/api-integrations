import { globSync } from 'glob';
import { difference } from 'lodash';
import { OIS } from '@api3/ois';
import { Logger, ILogObj } from 'tslog';
import * as fs from 'fs';
import * as paths from 'path';

import * as prettier from 'prettier/standalone';
import tsBabel = require('prettier/plugins/babel');
import tsEstree = require('prettier/plugins/estree');

import {
  getPreProcessingString,
  extractPreProcessingObject,
  readJson,
  getPostProcessingString
} from '../config-generation/config-utils';

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
    let totalOises = 0;

    apiPaths.map((path) => {
      const oises: OIS[] = globSync(`${path}/oises/*`).map((oisPath) => readJson(oisPath));
      logger.info('\tTotal oises found:', oises.length, 'for', path);
      totalOises += oises.length;

      oises.map((ois) => {
        const preProcessingObject = getPreProcessingString(ois);
        const postProcessingObject = getPostProcessingString(ois);

        preProcessingSpecifications.push(preProcessingObject);
        postProcessingSpecifications.push(postProcessingObject);
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
      return provider.map((item) => {
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

async function checkPathGeneration() {}

async function main() {
  logger.info('##########################################################################.');
  logger.info('Parsing the preProcessingSpecifications and postProcessingSpecifications.');
  const deployments = await parse();
  logger.info('##########################################################################.');

  logger.info('##########################################################################.');
  logger.info('Checking path generation.');
  await checkPathGeneration();
  logger.info('##########################################################################.');
}

main();
