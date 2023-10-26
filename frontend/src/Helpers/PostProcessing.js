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

export const getAPIResponse = async (request, method, apiKey) => {

  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (request.headers !== undefined) {
      request.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }

    if (request.cookies !== undefined) {
      request.cookies.forEach((cookie) => {
        options.headers[cookie.name] = cookie.value;
      });
    }

    if (request.body !== null) {
      options.body = JSON.stringify(request.body);
    }

    if (apiKey !== undefined) {
      switch (apiKey.in) {
        case "header":
          options.headers[apiKey.key] = apiKey.value;
          break;
        case "query":
          request.path += `&${apiKey.key}=${apiKey.value}`;
          break;
        default:
          break;
      }
    }

    const response = await fetch(request.url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }

};
