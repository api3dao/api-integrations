export const getApis = (callback) => {
  const url = 'https://fetch.api3dev.com/get/apis';

  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const checkFiles = (ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  let apis = [];

  let activeDeployment = [];
  let candidateDeployment = [];

  for (let i = 0; i < keys.length; i++) {
    const api = keys[i].split('/')[1];
    const value = values[i];

    const filename = keys[i].match(/[a-z0-9-]+-pusher.json$/)[0];

    const isExist = apis.find((item) => item[api]);

    if (isExist) {
      activeDeployment = isExist[api].activeDeployment;
      candidateDeployment = isExist[api].candidateDeployment;

      if (keys[i].includes('active-deployments')) {
        activeDeployment.push({ filename: filename, config: value, category: 'active', apiProvider: api });
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment.push({ filename: filename, config: value, category: 'candidate', apiProvider: api });
      }
    } else {
      let activeDeployment = [];
      let candidateDeployment = [];

      if (keys[i].includes('active-deployments')) {
        activeDeployment = [{ filename: filename, config: value, category: 'active', apiProvider: api }];
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment = [{ filename: filename, config: value, category: 'candidate', apiProvider: api }];
      }

      const obj = {
        [api]: {
          activeDeployment: activeDeployment,
          candidateDeployment: candidateDeployment
        }
      };
      apis.push(obj);
    }
  }

  return apis;
};
