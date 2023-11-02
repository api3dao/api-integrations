import parserTypeScript from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import { log } from '../Helpers/Logger';
import _ from 'lodash';

export const cut = (object, initialMatch, finalMatch, replaceQuotes = true, json = false, setError) => {
  try {
    const newObject = object.map((code, index) => {
      let sanitized = code.value.replaceAll(/(\n)/g, '');
      sanitized = sanitized.replace(/ +(?= )/g, '');
      const object = sanitized.match(initialMatch);

      let filtered = replaceQuotes ? object[0].replaceAll(/(\\n)|(\\)|(")/g, '') : object[0].replaceAll(/(\\n)/g, '');
      filtered = filtered.replace(/ +(?= )/g, '');
      return filtered;
    });

    if (json) {
      const val = jsonify(newObject[0], setError);
      return val;
    } else {
      if (newObject == null || newObject === undefined) return [];
      const splitParanthesis = newObject[0].match(finalMatch);
      let final = [];

      for (let i = 0; i < splitParanthesis.length; i++) {
        const split = splitParanthesis[i].split(/:(.*)/s);
        final.push(split);
      }
      return final;
    }
  } catch (error) {
    setError(error);
  }

  return [];
};

export const combine = (endpoint, setError) => {
  if (endpoint === null || endpoint === undefined || endpoint.length === 0) return [];
  const postProcessingSpecifications = cut(
    endpoint.postProcessingSpecifications,
    /{.+}/g,
    /[A-Z0-9]+\/[A-Z]+: (?:\(+)(.+?)(?:\)+) => (?:\{ +)(.+?)(?: \}+)/g,
    true,
    false,
    setError
  );
  const preProcessingSpecifications = cut(
    endpoint.preProcessingSpecifications,
    /{.+(" |)}(,|) },}/g,
    /["A-Z0-9]+\/[A-Z"]+: (?:\{+)(.+?)(?:(,|}) \}+)/g,
    false,
    true,
    setError
  );
  log('debug', ['postProcessingSpecifications: ', postProcessingSpecifications]);
  log('debug', ['preProcessingSpecifications: ', preProcessingSpecifications]);

  const combined = postProcessingSpecifications.map((item, index) => {
    log('debug', [item[0], item[1], preProcessingSpecifications[item[0]]]);
    return {
      feed: item[0],
      code: item[1],
      preProcessingSpecificationsValue: preProcessingSpecifications[item[0]]
    };
  });

  log('debug', ['combined: ', combined]);
  return combined;
};

export const getEndpoints = (ois) => {
  let endpoints = [];
  let oisTitles = [];
  try {
    for (let i = 0; i < ois.length; i++) {
      ois[i].endpoints.filter((endpoint) => endpoint.name === 'feed').map((endpoint) => endpoints.push(endpoint));
      oisTitles.push(ois[i].title);
    }
  } catch (error) {
    return { endpoints, oisTitles };
  }
  return { endpoints, oisTitles };
};

export const getFeeds = (endpoints) => {
  let feeds = [];
  endpoints.endpoints.map((endpoint) => feeds.push(combine(endpoint)));
  return { oisTitle: endpoints.oisTitles, feeds };
};

const onlyInLeft = (left, right, compareFunction) =>
  left.filter((leftValue) => !right.some((rightValue) => compareFunction(leftValue, rightValue)));

export const compareFeeds = (newFeeds, oldFeeds) => {
  let newAdded = [];
  let newRemoved = [];
  let newUpdated = [];
  let newUnchanged = [];

  const isSameFeed = (a, b) => {
    return a.feed === b.feed;
  };
  const isCodeChanged = (a, b) => {
    return (
      a.feed === b.feed &&
      (a.code !== b.code || _.isEqual(a.preProcessingSpecificationsValue, b.preProcessingSpecificationsValue) === false)
    );
  };
  const isUnchanged = (a, b) => {
    return (
      a.feed === b.feed &&
      a.code === b.code &&
      _.isEqual(a.preProcessingSpecificationsValue, b.preProcessingSpecificationsValue)
    );
  };

  try {
    for (let i = 0; i < oldFeeds.feeds.length; i++) {
      newRemoved.push(onlyInLeft(oldFeeds.feeds[i], newFeeds.feeds[i], isSameFeed));
      newAdded.push(onlyInLeft(newFeeds.feeds[i], oldFeeds.feeds[i], isSameFeed));

      let tmp = [];
      newFeeds.feeds[i].filter((newFeed) => {
        return oldFeeds.feeds[i].some((oldFeed) => {
          const result = isCodeChanged(newFeed, oldFeed);
          if (result) {
            tmp.push({ oldFeed: oldFeed, newFeed: newFeed });
          }
          return result;
        });
      });
      newUpdated.push(tmp);
      newUnchanged.push(
        newFeeds.feeds[i].filter((newFeed) => oldFeeds.feeds[i].some((oldFeed) => isUnchanged(newFeed, oldFeed)))
      );
    }
  } catch (error) {
    console.log(error);
  }

  return {
    added: newAdded,
    removed: newRemoved,
    updated: newUpdated,
    unchanged: newUnchanged
  };
};

export const extractFeeds = (newOis, oldOis) => {
  const endpointsOld = getEndpoints(oldOis);
  const endpointsNew = getEndpoints(newOis);

  const oldFeeds = getFeeds(endpointsOld);
  const newFeeds = getFeeds(endpointsNew);

  return {
    compareFeeds: compareFeeds(newFeeds, oldFeeds),
    endpointsOld: endpointsOld,
    endpointsNew: endpointsNew
  };
};

export const jsonify = (object, setError) => {
  try {
    const formattedJson = formatCode(object, 'json');
    const json = JSON.parse(formattedJson);
    return json;
  } catch (error) {
    setError(error);
  }
};

export const getServerUrl = (servers) => {
  if (servers.length === 0) return '';
  const server = servers[0];
  const url = server.url;
  return url;
};

export const getPath = (endpointParameters, feed, servers, method, setError) => {
  try {
    const parameters = feed.preProcessingSpecificationsValue;
    if (parameters === undefined) return null;
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
          if (method === 'get') {
            queryString += `${parameterIn.name}=${parameters.parameters[key]}&`;
          }
          break;
        default:
          break;
      }
    });

    queryString = queryString.substring(0, queryString.length - 1);

    const pathWithBase = url + '/' + path + queryString;

    return pathWithBase;
  } catch (error) {
    setError(error);
    return 'ERROR';
  }
};

export const pathFromPrePreProcessing = (endpointParameters, parameters, servers) => {
  if (parameters === undefined) return parameters;
  if (servers.length === 0) return parameters;

  const server = servers[0];
  const url = server.url;

  let path = '';
  let headers = [];
  let cookies = [];
  let body = null;
  let queryString = '?';

  Object.keys(parameters).forEach((key) => {
    const parameterIn = endpointParameters.filter((item) => item.name === key)[0].operationParameter;

    switch (parameterIn.in) {
      case 'path':
        path += parameters[key];
        break;
      case 'header':
        headers.push({ name: parameterIn.name, value: parameters[key] });
        break;
      case 'cookie':
        cookies.push({ name: parameterIn.name, value: parameters[key] });
        break;
      case 'body':
        body = parameters[key];
        break;
      case 'query':
        queryString += `${parameterIn.name}=${parameters[key]}&`;
        break;
      default:
        break;
    }
  });

  queryString = queryString.substring(0, queryString.length - 1);

  const pathWithBase = url + '/' + path + queryString;

  const result = {
    url: pathWithBase,
    headers: headers,
    cookies: cookies,
    body: body
  };

  return result;
};

export const getApiKey = (apiCredentials, securitySchemes) => {
  const securitySchemeName = Object.keys(securitySchemes).find((key) => key === apiCredentials.securitySchemeName);
  const securityScheme = securitySchemes[securitySchemeName];

  const apiKey = {
    in: securityScheme.in,
    key: securityScheme.name,
    value: apiCredentials.securitySchemeValue
  };

  return apiKey;
};

export const formatCode = (code, parser = 'babel', semi = true) => {
  try {
    return prettier.format(code, {
      semi: semi,
      parser: parser,
      plugins: [parserTypeScript]
    });
  } catch (error) {
    return code;
  }
};

export const formatParameters = (parameters, preProcessingSpecificationsValue, method, setError) => {
  try {
    const formattedParameters = [];
    Object.keys(parameters).forEach((key) => {
      const parameter = parameters[key];
      if (parameter.name === 'path') return;
      const data =
        parameter.name === 'path'
          ? preProcessingSpecificationsValue.path
          : preProcessingSpecificationsValue.parameters[parameter.name];

      if (data === undefined) {
        return;
      }

      let type = parameter.operationParameter == null ? 'string' : parameter.operationParameter.in;
      if (type === 'query' && method === 'post') type = 'body';

      formattedParameters.push({
        name: parameter.name,
        type: type,
        value: data,
        required: parameter.required ? 'Yes' : 'No'
      });
    });

    formattedParameters.sort((a, b) => {
      if (b.value === undefined && a.value !== undefined) return -1;
      return 0;
    });

    return formattedParameters;
  } catch (error) {
    setError(error);
  }
};

export const checkSupportedFeedsInBatches = (supportedFeedsInBatches, oises) => {

  const feedEndpoints = oises.map((ois) => {
    const feedEndpoint = ois.endpoints.filter((endpoint) => endpoint.name === 'feed');

    return {
      oisTitle: ois.title,
      feeds: combine(feedEndpoint[0])
    }
  });

  return feedEndpoints.map((feedEndpoint) => {
    const feeds = supportedFeedsInBatches[feedEndpoint.oisTitle].flat();

    return {
      oisTitle: feedEndpoint.oisTitle,
      unsupportedFeeds: feedEndpoint.feeds.filter((feed) => {
        return !feeds.includes(feed.feed);
      })
    }

  });
}