export const checkFiles = (ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  let apis = [];

  let activeDeployment = [];
  let candidateDeployment = [];

  let apiData = [];

  for (let i = 0; i < keys.length; i++) {
    const api = keys[i].split('/')[1];
    const value = values[i];

    const filename = keys[i].match(/api-data.json/);

    if (filename === null) {
      continue;
    }

    if (filename[0] === 'api-data.json') {
      apiData.push({ config: value, apiProvider: api });
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const api = keys[i].split('/')[1];
    const value = values[i];

    const filename = keys[i].match(/[a-z0-9-]+-pusher.json/);

    if (filename === null) {
      continue;
    }

    const isExist = apis.find((item) => item[api]);

    if (isExist) {
      activeDeployment = isExist[api].activeDeployment;
      candidateDeployment = isExist[api].candidateDeployment;

      if (keys[i].includes('active-deployments')) {
        activeDeployment.push({ filename: filename, config: value, category: 'active', apiProvider: api });
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment.push({
          filename: filename,
          config: value,
          category: 'candidate',
          apiProvider: api
        });
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
          candidateDeployment: candidateDeployment,
          apiData: apiData.find((item) => item.apiProvider === api)
        }
      };
      apis.push(obj);
    }
  }

  return apis;
};
