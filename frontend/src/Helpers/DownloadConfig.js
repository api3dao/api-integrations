import JSZip from 'jszip';
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

  const stage = ['\\nSTAGE=aws'];
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

const downloadCloudFormation = (CloudFormation, configData) => {
  const entryPoint = [
    '/bin/sh',
    '-c',
    `echo -e $SECRETS_ENV >> ./config/secrets.env && wget -O - https://raw.githubusercontent.com/api3dao/api-integrations/main/data/apis/${configData.apiProvider}/deployments/${configData.category}-deployments/${configData.filename} >> ./config/pusher.json && node dist/src/index.js`
  ];

  const secrets = getSecrets(configData.config.apiCredentials);

  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].Environment[0].Value = secrets;
  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[1].EntryPoint = entryPoint;
  CloudFormation.Parameters = getParameters(configData.config.apiCredentials);

  if (configData.category === 'staging') {
    CloudFormation.Resources.CloudWatchLogsGroup.Properties.LogGroupName = 'PusherLogGroupStaging';
    CloudFormation.Resources.AppService.Properties.Cluster.Ref = 'AppClusterStaging';

    CloudFormation.Resources.AppClusterStaging = {
      Type: 'AWS::ECS::Cluster',
      Properties: {
        ClusterName: 'PusherClusterStaging'
      }
    };

    delete CloudFormation.Resources.AppCluster;
  }

  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(CloudFormation, null, 2))}`;

  const link = document.createElement('a');
  link.href = jsonString;
  link.download = 'CloudFormation.json';
  link.click();
};

export const downloadZip = (secrets, config) => {
  var zip = new JSZip();
  zip.file('secrets.env', secrets.replaceAll(/(\\n)/g, '\n'));
  zip.file('pusher.json', JSON.stringify(config, null, 2));

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'pusher-config.zip');
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
