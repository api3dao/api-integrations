import { OIS, Endpoint } from '@api3/ois';
import * as fs from 'fs';

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
