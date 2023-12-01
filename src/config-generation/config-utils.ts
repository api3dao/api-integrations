import * as fs from 'fs';
import { OIS, Endpoint } from '@api3/ois';

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
  const preProcValue =
    'return ' +
    feedEndpoint.preProcessingSpecificationV2.value
      .replace('...preProcessingObject[endpointParameters.name].parameters,', '')
      .replace('path: preProcessingObject[endpointParameters.name].path,', 'preProcessingObject');

  const evaluated = Function('endpointParameters', preProcValue);

  return evaluated()({}).endpointParameters.preProcessingObject;
}

// if contents of postProcessing change this function might require changes in .replace (!!!)
export function extractPostProcessingObject(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  const postProcValue =
    'return ' +
    feedEndpoint!.postProcessingSpecificationV2.value
      .replace('const parser = eval(postProcessingObject[endpointParameters.name])', '')
      .replace('return { response: parser(response) }', 'return postProcessingObject;');

  const evaluated = Function('endpointParameters', 'input', 'output', postProcValue + 'return postProcessingObject;');

  return evaluated()({}, {});
}

export function getPreProcessingString(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  return feedEndpoint!.preProcessingSpecificationV2;
}

export function getPostProcessingString(ois: OIS) {
  const feedEndpoint = ois.endpoints.find((e: Endpoint) => e.name === 'feed');
  return feedEndpoint!.postProcessingSpecificationV2;
}

export function getFeedEndpointParameters(ois: OIS) {
  return ois.endpoints.filter((e: Endpoint) => e.name === 'feed')[0].parameters;
}
