export const postProcessing = (
  apiCallResponse,
  apiCallParameters,
  endpoint,
  callback
) => {
  const url = "https://commons.api3dev.com/post";
  const body = {
    apiCallResponse: apiCallResponse,
    apiCallParameters: apiCallParameters,
    endpoint: endpoint,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const preProcessing = (endpoint, apiCallParameters, callback) => {
  const url = "https://commons.api3dev.com/pre";
  const body = {
    apiCallParameters: apiCallParameters,
    endpoint: endpoint,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAPIResponse = async (url, method, apiKey) => {

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (apiKey !== undefined) {
    switch (apiKey.in) {
      case "header":
        options.headers[apiKey.key] = apiKey.value;
        break;
      case "query":
        url += `&${apiKey.key}=${apiKey.value}`;
        break;
      default:
        break;
    }
  }

  console.log(url);
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
