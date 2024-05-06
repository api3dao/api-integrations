import deployments from '../data/deployments.json';

export const checkFiles = (ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  let apis = [];

  let apiDatas = [];

  const hashFile = (category, apiProvider) => {
    const hash = deployments.find((item) => item.apiProvider === apiProvider && item.category === category);
    if (!hash)
      return {
        keccak256: '',
        sha256: ''
      };

    return hash;
  };

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

    const filename = keys[i].match(/[a-z0-9-]+-airnode-feed.json/);

    if (filename === null) {
      continue;
    }

    let activeDeployment = [];
    let candidateDeployment = [];
    let stagingDeployment = [];

    const isExist = apis.find((item) => item.alias === api);

    if (isExist) {
      activeDeployment = isExist.activeDeployment;
      candidateDeployment = isExist.candidateDeployment;
      stagingDeployment = isExist.stagingDeployment;

      if (keys[i].includes('active-deployments')) {
        activeDeployment.push({
          filename: filename,
          config: value,
          category: 'active',
          apiProvider: api,
          hash: hashFile(value)
        });
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment.push({
          filename: filename,
          config: value,
          category: 'candidate',
          apiProvider: api,
          hash: hashFile(value)
        });
      } else if (keys[i].includes('staging-deployments')) {
        stagingDeployment.push({
          filename: filename,
          config: value,
          category: 'staging',
          apiProvider: api,
          hash: hashFile(value)
        });
      }
    } else {
      if (keys[i].includes('active-deployments')) {
        activeDeployment = [
          {
            filename: filename,
            config: value,
            category: 'active',
            apiProvider: api,
            hash: hashFile('active-deployments', api)
          }
        ];
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment = [
          {
            filename: filename,
            config: value,
            category: 'candidate',
            apiProvider: api,
            hash: hashFile('candidate-deployments', api)
          }
        ];
      } else if (keys[i].includes('staging-deployments')) {
        stagingDeployment = [
          {
            filename: filename,
            config: value,
            category: 'staging',
            apiProvider: api,
            hash: hashFile('staging-deployments', api)
          }
        ];
      }

      const apiData = apiDatas.find((item) => item.apiProvider === api);
      const obj = {
        alias: api,
        name: apiData.config.name,
        activeDeployment: activeDeployment,
        candidateDeployment: candidateDeployment,
        stagingDeployment: stagingDeployment,
        apiData: apiData
      };
      apis.push(obj);
    }
  }

  return apis;
};
