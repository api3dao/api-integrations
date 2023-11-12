import { sha256 } from 'js-sha256';

export const checkFiles = (ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);

  let apis = [];

  let activeDeployment = [];
  let candidateDeployment = [];
  let stagingDeployment = [];

  let apiDatas = [];

  const hashFile = (file) => {
    return '0x' + sha256(JSON.stringify(file));
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

    const filename = keys[i].match(/[a-z0-9-]+-pusher.json/);

    if (filename === null) {
      continue;
    }

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
      let activeDeployment = [];
      let candidateDeployment = [];
      let stagingDeployment = [];

      if (keys[i].includes('active-deployments')) {
        activeDeployment = [
          { filename: filename, config: value, category: 'active', apiProvider: api, hash: hashFile(value) }
        ];
      } else if (keys[i].includes('candidate-deployments')) {
        candidateDeployment = [
          { filename: filename, config: value, category: 'candidate', apiProvider: api, hash: hashFile(value) }
        ];
      } else if (keys[i].includes('staging-deployments')) {
        stagingDeployment = [
          { filename: filename, config: value, category: 'staging', apiProvider: api, hash: hashFile(value) }
        ];
      }

      const apiData = apiDatas.find((item) => item.apiProvider === api);
      const obj = {
        alias: api,
        name: apiData.config.name,
        activeDeployment: activeDeployment,
        candidateDeployment: candidateDeployment,
        stagingDeployment: stagingDeployment,
        apiData: apiData,
        hash: hashFile(value)
      };
      apis.push(obj);
    }
  }

  return apis;
};
