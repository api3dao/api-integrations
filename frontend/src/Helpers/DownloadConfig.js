import JSZip from 'jszip';
import _ from 'lodash';
import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';
import { CONSTANTS } from '../data/constants';

const checkCloudFormationFile = (ctx) => {
  let values = ctx.keys().map(ctx);
  return values[0];
};

const getCfFile = () => {
  const cloudFormation = ((ctx) => {
    return checkCloudFormationFile(ctx);
  })(require.context('../../../data/', true, /cloudformation-template.json/));

  if (localStorage.getItem('cloudFormation') === null) {
    localStorage.setItem('cloudFormation', JSON.stringify(cloudFormation, null, 2));
  }
  return JSON.parse(localStorage.getItem('cloudFormation'));
};

async function getRawPermalink(filePath) {
  const apiUrl = `https://api.github.com/repos/api3dao/api-integrations/commits?path=${filePath}&page=1&per_page=1`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const commits = await response.json();
      if (commits.length === 0) {
        return [false, `Given filePath has no commits! API call URL: ${apiUrl}`];
      }
      const commitHash = commits[0].sha;
      const rawUrl = `https://raw.githubusercontent.com/api3dao/api-integrations/${commitHash}/${filePath}`;
      return [true, rawUrl];
    } else if (response.status === 404) {
      console.log(`URL not found (404): ${apiUrl}`);
    } else {
      console.log(`URL returned status code ${response.status}: ${apiUrl}`);
    }
  } catch (error) {
    console.error('Error fetching commit data:', error);
  }
}

async function fetchConfigAndCalculateMd5Hash(rawUrl) {
  try {
    const response = await fetch(rawUrl);
    if (response.ok) {
      const configAsText = await response.text();
      const configMd5Hash = CryptoJS.MD5(configAsText);
      return [true, configMd5Hash];
    } else if (response.status === 404) {
      const errorMessage = `URL not found (404): ${rawUrl}`;
      return [false, errorMessage];
    } else {
      console.log(`URL returned status code ${response.status}: ${rawUrl}`);
    }
  } catch (error) {
    console.error('Error fetching raw config data:', error);
  }
}

export const populateOis = (configData, airnodeAddress, mode = CONSTANTS.CLOUD_FORMATION_DEPLOY, callback) => {
  const cloudFormation = getCfFile();

  if (cloudFormation == null) return;
  if (configData == null) return;
  if (configData.config.ois === null) return;
  if (configData.config.ois.length === 0) return;

  let API_KEY = '';
  configData.config.apiCredentials.forEach((item) => {
    API_KEY += `\\n${item.securitySchemeName.toUpperCase()}_VALUE=${item.securitySchemeValue}`;
  });

  const stage = `\\nSTAGE=${mode}`;
  const secrets = `WALLET_MNEMONIC=<ENTER_MNEMONIC>${API_KEY}${stage}`;
  const filePath = 'data/apis/<API_ALIAS>/deployments/<DEPLOYMENT_TYPE>-deployments/<FILE_NAME>'
    .replace('<API_ALIAS>', configData.apiProvider)
    .replace('<DEPLOYMENT_TYPE>', configData.category)
    .replace('<FILE_NAME>', configData.filename);

  switch (mode) {
    case CONSTANTS.CLOUD_FORMATION_DEPLOY:
      // fetch commit
      getRawPermalink(filePath).then(([success, airnodeFeedConfigRawCommitUrl]) => {
        if (!success) {
          const errorMessage = airnodeFeedConfigRawCommitUrl;
          alert(errorMessage);
        } else {
          // fetch raw config
          fetchConfigAndCalculateMd5Hash(airnodeFeedConfigRawCommitUrl).then(([success, configMd5Hash]) => {
            if (success) {
              downloadCloudFormation(
                cloudFormation,
                configData,
                airnodeAddress,
                airnodeFeedConfigRawCommitUrl,
                configMd5Hash
              );
            } else {
              const errorMessage = configMd5Hash;
              alert(errorMessage);
            }
          });
        }
      });

      break;
    case CONSTANTS.DOCKER_DEPLOY:
      downloadZip(secrets, configData);
      break;
    default:
      break;
  }

  callback({
    status: true,
    message: 'File downloaded successfully',
    mode: mode
  });
};

const getSecrets = (credentials) => {
  // Airnode mnemonic
  let secrets = {
    'Fn::Join': [
      '',
      [
        'WALLET_MNEMONIC',
        '=',
        {
          Ref: 'airnodeMnemonic'
        }
      ]
    ]
  };
  // OIS secrets
  credentials.forEach((item) => {
    const entry = [
      '\\n',
      item.securitySchemeName.toUpperCase() + '_VALUE',
      '=',
      {
        Ref: item.securitySchemeName
      }
    ];

    entry.forEach((item) => {
      secrets['Fn::Join'][1].push(item);
    });
  });
  // Stage
  const stage = ['\\n', 'STAGE', '=', 'aws'];
  stage.forEach((item) => secrets['Fn::Join'][1].push(item));

  return secrets;
};

const getParameters = (credentials) => {
  let parameters = {
    airnodeMnemonic: {
      Type: 'String',
      MinLength: 10,
      Description: 'Mnemonic phrase of your Airnode address.'
    }
  };

  credentials.forEach((item) => {
    const val = {
      Type: 'String',
      MinLength: 10,
      Description: `Please enter the value for the security parameter ${item.securitySchemeName}`
    };

    parameters[item.securitySchemeName] = val;
  });

  return parameters;
};

const replaceSomeId = (CloudFormation, configData) => {
  const newConfig = JSON.stringify(CloudFormation).replace(
    /-<SOME_ID>/g,
    configData.category === 'staging' ? 'Staging' : ''
  );
  return JSON.parse(newConfig);
};

const downloadCloudFormation = (CloudFormation, configData, airnodeAddress, airnodeFeedConfigUrl, configMd5Hash) => {
  let secrets = getSecrets(configData.config.apiCredentials);
  // Remove placeholder parameters
  const placeholderParameters = ['apiKey1', 'apiKey2'];
  placeholderParameters.forEach((p) => {
    CloudFormation.Parameters = _.omit(CloudFormation.Parameters, p);
  });
  // Remove Signed API Token parameters based on the deployment category
  switch (configData.category) {
    case 'staging': {
      const parametersToDelete = ['NodarySignedApiToken', 'Api3SignedApiToken'];
      parametersToDelete.forEach((p) => {
        CloudFormation.Parameters = _.omit(CloudFormation.Parameters, p);
      });
      break;
    }
    case 'candidate': {
      const parametersToDelete = ['StagingSignedApiToken'];
      parametersToDelete.forEach((p) => {
        CloudFormation.Parameters = _.omit(CloudFormation.Parameters, p);
      });
      break;
    }
  }
  // add Signed API tokens to contents of SECRETS_ENV
  const signedApiSecretsMap = {
    AUTH_TOKEN_STAGING: 'StagingSignedApiToken',
    AUTH_TOKEN_NODARY: 'NodarySignedApiToken',
    AUTH_TOKEN_API3: 'Api3SignedApiToken'
  };
  switch (configData.category) {
    case 'staging': {
      const keysToAdd = ['AUTH_TOKEN_STAGING'];
      keysToAdd.forEach((k) => {
        [
          '\\n',
          k,
          '=',
          {
            Ref: signedApiSecretsMap[k]
          }
        ].forEach((v) => secrets['Fn::Join'][1].push(v));
      });
      break;
    }
    case 'candidate': {
      const keysToAdd = ['AUTH_TOKEN_NODARY', 'AUTH_TOKEN_API3'];
      keysToAdd.forEach((k) => {
        [
          '\\n',
          k,
          '=',
          {
            Ref: signedApiSecretsMap[k]
          }
        ].forEach((i) => secrets['Fn::Join'][1].push(i));
      });
      break;
    }
  }

  const runnerBashScript = `
  mkdir config;
  echo -e $SECRETS_ENV > ./config/secrets.env;
  wget -O - ${airnodeFeedConfigUrl} > ./config/airnode-feed.json;
  EXPECTED_HASH="${configMd5Hash}";
  CONFIG_HASH="$(md5sum ./config/airnode-feed.json | awk '{ print $1 }')";

  echo "Config's hash: $CONFIG_HASH, Expected hash: $EXPECTED_HASH";

  if [ "$CONFIG_HASH" = "$EXPECTED_HASH" ]; then
      echo "Hash confirmed, running the app...";
      node dist/src/index.js;
  else
      echo "The Airnode feed config's hash does not match the initial hash";
  fi
  `;
  const runnerBashScriptInBase64 = Base64.encode(runnerBashScript);
  const containerCommands =
    CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].Command[0].replace(
      '<RUNNER_SCRIPT_BASE64>',
      runnerBashScriptInBase64
    );

  // Interpolate "LogConfiguration"
  const interpolationAirnodeAddress = '<AIRNODE_ADDRESS>';

  let logConfiguration =
    CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].LogConfiguration.Options.Labels;
  logConfiguration = logConfiguration.replace(interpolationAirnodeAddress, airnodeAddress);

  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].Command = [containerCommands];
  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].Environment[0].Value = secrets;
  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].LogConfiguration.Options.Labels =
    logConfiguration;
  CloudFormation.Parameters = {
    ...getParameters(configData.config.apiCredentials),
    ...CloudFormation.Parameters
  };

  CloudFormation = replaceSomeId(CloudFormation, configData);

  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(CloudFormation, null, 2))}`;

  localStorage.removeItem('cloudFormation');

  const link = document.createElement('a');
  link.href = jsonString;
  link.download = 'CloudFormation.json';
  link.click();
};

export const downloadZip = (secrets, config) => {
  var zip = new JSZip();
  zip.file('secrets.env', secrets.replaceAll(/(\\n)/g, '\n'));
  zip.file('airnode-feed.json', JSON.stringify(config, null, 2));

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'airnode-feed-config.zip');
  });
};

const saveAs = (blob, filename) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};
