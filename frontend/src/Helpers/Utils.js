
import parserTypeScript from "prettier/parser-babel";
import prettier from "prettier/standalone";
import { log } from "../Helpers/Logger";

export const cut = (
  object,
  initialMatch,
  finalMatch,
  replaceQuotes = true,
  json = false,
  setError
) => {
  try {
    const newObject = object.map((code, index) => {
      let sanitized = code.value.replaceAll(/(\n)/g, "");
      sanitized = sanitized.replace(/ +(?= )/g, "");
      log("debug", ["sanitized: ", sanitized]);
      const object = sanitized.match(initialMatch);
      log("debug", ["object: ", object])

      let filtered = replaceQuotes
        ? object[0].replaceAll(/(\\n)|(\\)|(")/g, "")
        : object[0].replaceAll(/(\\n)/g, "");
      filtered = filtered.replace(/ +(?= )/g, "");
      log("debug", ["filtered: ", filtered]);
      return filtered;
    });

    if (json) {
      log("debug", ["newObject: ", newObject])
      const val = jsonify(newObject[0], setError);
      log("debug", ["val: ", val])
    } else {
      log("debug", ["newObject: ", newObject])
      if (newObject == null || newObject === undefined) return [];
      const splitParanthesis = newObject[0].match(finalMatch);
      log("debug", ["splitParanthesis: ", splitParanthesis])
      let final = [];

      for (let i = 0; i < splitParanthesis.length; i++) {
        const split = splitParanthesis[i].split(/:(.*)/s);
        final.push(split);
      }
      log("debug", ["final: ", final])
      return final;
    }

  } catch (error) {
    setError(error);
  }

  return [];
};

export const combine = (endpoint, setError) => {
  if (endpoint === null || endpoint === undefined || endpoint.length === 0)
    return [];
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
    false,
    setError
  );
  log("debug", ["postProcessingSpecifications: ", postProcessingSpecifications])
  log("debug", ["preProcessingSpecifications: ", preProcessingSpecifications])

  const combined = postProcessingSpecifications.map((item, index) => {
    const specifications = preProcessingSpecifications.filter(
      (j) => j[0].replaceAll(/(\\n)|(\\)|(")/g, "") === item[0]
    );
    const preProcessingSpecificationsValue =
      specifications.length > 0 ? specifications : [["", ""]];

    log("debug", ["preProcessingSpecificationsValue: ", preProcessingSpecificationsValue])
    return {
      feed: item[0],
      code: item[1],
      preProcessingSpecificationsValue: preProcessingSpecificationsValue[0][1],
    };
  });

  log("debug", ["combined: ", combined])
  return combined;
};

export const getEndpoints = (ois) => {
  let endpoints = [];
  ois.map((ois, index) =>
    ois.endpoints
      .filter((endpoint) => endpoint.name === "feed")
      .map((endpoint, index) => endpoints.push(endpoint))
  );
  return endpoints;
};

export const getFeeds = (endpoints) => {
  let feeds = [];
  endpoints.map((endpoint) => feeds.push(combine(endpoint)));
  return feeds;
};

const onlyInLeft = (left, right, compareFunction) =>
  left.filter(
    (leftValue) =>
      !right.some((rightValue) => compareFunction(leftValue, rightValue))
  );

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
      (a.code !== b.code ||
        a.preProcessingSpecificationsValue !==
        b.preProcessingSpecificationsValue)
    );
  };
  const isUnchanged = (a, b) => {
    return (
      a.feed === b.feed &&
      a.code === b.code &&
      a.preProcessingSpecificationsValue === b.preProcessingSpecificationsValue
    );
  };

  for (let i = 0; i < oldFeeds.length; i++) {
    newRemoved.push(onlyInLeft(oldFeeds[i], newFeeds[i], isSameFeed));
    newAdded.push(onlyInLeft(newFeeds[i], oldFeeds[i], isSameFeed));

    let tmp = [];
    newFeeds[i].filter((newFeed) => {
      return oldFeeds[i].some((oldFeed) => {
        const result = isCodeChanged(newFeed, oldFeed);
        if (result) {
          tmp.push({ oldFeed: oldFeed, newFeed: newFeed });
        }
        return result;
      });
    });
    newUpdated.push(tmp);
    newUnchanged.push(
      newFeeds[i].filter((newFeed) =>
        oldFeeds[i].some((oldFeed) => isUnchanged(newFeed, oldFeed))
      )
    );
  }

  return {
    added: newAdded,
    removed: newRemoved,
    updated: newUpdated,
    unchanged: newUnchanged,
  };
};

export const extractFeeds = (newOis, oldOis) => {
  const endpointsOld = getEndpoints(oldOis);
  const endpointsNew = getEndpoints(newOis);

  const oldFeeds = getFeeds(endpointsOld);
  const newFeeds = getFeeds(endpointsNew);

  return {
    compareFeeds: compareFeeds(newFeeds, oldFeeds),
    apiSpecsOld: oldOis[0].apiSpecifications,
    apiSpecsNew: newOis[0].apiSpecifications,
    endpointsOld: endpointsOld,
    endpointsNew: endpointsNew,
  };
};

export const jsonify = (object, setError) => {
  try {
    const formattedJson = formatCode(object, "json");
    const json = JSON.parse(formattedJson);
    return json;
  } catch (error) {
    log("error", ["jsonify: ", error])
    setError(error);
  }
};

export const getApiCallParameters = (
  preProcessingSpecificationsValue,
  setError
) => {
  const apiCallParameters = jsonify(preProcessingSpecificationsValue, setError);
  if (apiCallParameters === null) return null;
  return apiCallParameters;
};

export const getServerUrl = (servers) => {
  if (servers.length === 0) return "";
  const server = servers[0];
  const url = server.url;
  return url;
};

export const getPath = (endpointParameters, feed, servers, setError) => {
  try {
    const parameters = jsonify(feed.preProcessingSpecificationsValue, setError);
    if (parameters === undefined) return null;
    if (servers.length === 0) return parameters.path;

    const server = servers[0];
    const url = server.url;

    let path = parameters.path;
    let headers = [];
    let cookies = [];
    let body = null;
    let queryString = "?";

    Object.keys(parameters.parameters).forEach((key) => {
      const parameterIn = endpointParameters.filter((item) => item.name === key)[0].operationParameter;

      switch (parameterIn.in) {
        case "path":
          path += parameters[key];
          break;
        case "header":
          headers.push({ name: parameterIn.name, value: parameters.parameters[key] });
          break;
        case "cookie":
          cookies.push({ name: parameterIn.name, value: parameters.parameters[key] });
          break;
        case "body":
          body = parameters.parameters[key];
          break;
        case "query":
          queryString += `${parameterIn.name}=${parameters.parameters[key]}&`;
          break;
        default:
          break;
      }

    });

    queryString = queryString.substring(0, queryString.length - 1);

    const pathWithBase = url + "/" + path + queryString;

    const result = {
      url: pathWithBase,
      headers: headers,
      cookies: cookies,
      body: body
    }

    return result
  } catch (error) {
    setError(error);

    const result = {
      url: "ERROR",
      headers: [],
      cookies: [],
      body: null
    }

    return result
  }
};

export const pathFromPrePreProcessing = (endpointParameters, parameters, servers) => {
  if (parameters === undefined) return parameters;
  if (servers.length === 0) return parameters;

  const server = servers[0];
  const url = server.url;

  let path = "";
  let headers = [];
  let cookies = [];
  let body = null;
  let queryString = "?";

  Object.keys(parameters).forEach((key) => {
    const parameterIn = endpointParameters.filter((item) => item.name === key)[0].operationParameter;

    switch (parameterIn.in) {
      case "path":
        path += parameters[key];
        break;
      case "header":
        headers.push({ name: parameterIn.name, value: parameters[key] });
        break;
      case "cookie":
        cookies.push({ name: parameterIn.name, value: parameters[key] });
        break;
      case "body":
        body = parameters[key];
        break;
      case "query":
        queryString += `${parameterIn.name}=${parameters[key]}&`;
        break;
      default:
        break;
    }

  });

  queryString = queryString.substring(0, queryString.length - 1);

  const pathWithBase = url + "/" + path + queryString;

  const result = {
    url: pathWithBase,
    headers: headers,
    cookies: cookies,
    body: body
  }

  return result;
};

export const getApiKey = (apiCredentials, securitySchemes) => {
  const securitySchemeName = Object.keys(securitySchemes).find(key => key === apiCredentials.securitySchemeName);
  const securityScheme = securitySchemes[securitySchemeName];

  const apiKey = {
    in: securityScheme.in,
    key: securityScheme.name,
    value: apiCredentials.securitySchemeValue
  }

  return apiKey;
};

export const formatCode = (code, parser = "babel") => {
  try {
    return prettier.format(code, {
      semi: true,
      parser: parser,
      plugins: [parserTypeScript],
    });
  } catch (error) {
    return code;
  }
};

