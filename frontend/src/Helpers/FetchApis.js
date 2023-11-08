export const checkFiles = (ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  let apis = [];

  let activeDeployment = [];
  let candidateDeployment = [];

  let apiDatas = [];

  for (let i = 0; i < keys.length; i++) {
    const api = keys[i].split('/')[1];
    const value = values[i];

    const filename = keys[i].match(/api-data.json/);

    if (filename === null) {
      continue;
    }

    if (filename[0] === 'api-data.json') {
      apiDatas.push({ config: value, apiProvider: api });
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const api = keys[i].split('/')[1];
    const value = values[i];

    const filename = keys[i].match(/[a-z0-9-]+-pusher.json/);

    if (filename === null) {
      continue;
    }

    const isExist = apis.find((item) => item.alias === api);

    if (isExist) {
      activeDeployment = isExist.activeDeployment;
      candidateDeployment = isExist.candidateDeployment;

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

      const apiData = apiDatas.find((item) => item.apiProvider === api);
      const obj = {
        alias: api,
        name: apiData.config.name,
        activeDeployment: activeDeployment,
        candidateDeployment: candidateDeployment,
        apiData: apiData
      };
      apis.push(obj);
    }
  }

  return apis;
};
