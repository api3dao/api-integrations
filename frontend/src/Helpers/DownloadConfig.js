import JSZip from 'jszip';
import _ from 'lodash';
import { CONSTANTS } from '../data/constants';

export const populateOis = (configData, mode = CONSTANTS.CLOUD_FORMATION_DEPLOY, callback) => {
  const checkCloudFormationFile = (ctx) => {
    let values = ctx.keys().map(ctx);
    return values[0];
  };

  const cloudFormation = ((ctx) => {
    return checkCloudFormationFile(ctx);
  })(require.context('../../../data/', true, /cloudformation-template.json/));

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
  switch (mode) {
    case CONSTANTS.CLOUD_FORMATION_DEPLOY:
      downloadCloudFormation(cloudFormation, configData);
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

const downloadCloudFormation = (CloudFormation, configData) => {
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
        secrets['Fn::Join'][1].push([
          '\\n',
          k,
          '=',
          {
            Ref: signedApiSecretsMap[k]
          }
        ]);
      });
      break;
    }
  }

  // Interpolate "EntryPoint"
  const interpolationKeys = ['<API_ALIAS>', '<DEPLOYMENT_TYPE>', '<FILE_NAME>'];
  const interpolationValues = [configData.apiProvider, configData.category, configData.filename];
  let entryPointBashCmd = CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].EntryPoint[2];
  interpolationKeys.forEach((k, index) => {
    entryPointBashCmd = entryPointBashCmd.replace(k, interpolationValues[index]);
  });

  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].Environment[0].Value = secrets;
  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].EntryPoint[2] = entryPointBashCmd;
  CloudFormation.Parameters = {
    ...getParameters(configData.config.apiCredentials),
    ...CloudFormation.Parameters
  };

  CloudFormation = replaceSomeId(CloudFormation, configData);

  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(CloudFormation, null, 2))}`;

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
