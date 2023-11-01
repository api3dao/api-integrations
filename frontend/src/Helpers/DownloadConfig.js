import { CONSTANTS } from '../data/constants';

import JSZip from 'jszip';

export const testMnemonic = (mnemonic) => {
  if (mnemonic.split(' ').length !== 12)
    return {
      status: false,
      message: 'Invalid mnemonic: Mnemonic must be 12 words'
    };
  if (mnemonic.match(/[^a-zA-Z ]/))
    return {
      status: false,
      message: 'Invalid mnemonic: Mnemonic must only contain letters'
    };
  return { status: true, message: 'Valid mnemonic' };
};

export const populateOis = (configData, mode = CONSTANTS.CLOUD_FORMATION_DEPLOY, callback) => {

  const checkCloudFormationFile = (ctx) => {
    let values = ctx.keys().map(ctx);
    return values[0]
  };

  const cloudFormation = ((ctx) => {
    return checkCloudFormationFile(ctx);
  })(require.context('../../../data/', true, /cloudformation-template.json/));

  if (cloudFormation == null) return;
  if (configData == null) return;
  if (configData.config.ois === null) return;
  if (configData.config.ois.length === 0) return;

  if (configData.config.airnodeWalletMnemonic === null) return;

  const mnemonicTest = testMnemonic(configData.config.airnodeWalletMnemonic);
  if (mnemonicTest.status === false) {
    callback({ status: false, message: mnemonicTest.message, mode: mode });
    return;
  }

  let API_KEY = '';
  configData.config.apiCredentials.forEach((item) => {
    API_KEY += `\\n${item.securitySchemeName.toUpperCase()}_VALUE=${item.securitySchemeValue}`;
  });

  const stage = `\\nSTAGE=${mode}`;
  const secrets = `WALLET_MNEMONIC=${configData.config.airnodeWalletMnemonic}${API_KEY}${stage}`;
  switch (mode) {
    case CONSTANTS.CLOUD_FORMATION_DEPLOY:
      downloadCloudFormation(cloudFormation, secrets, configData);
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

const downloadCloudFormation = (CloudFormation, secrets, configData) => {
  const entryPoint = [
    '/bin/sh',
    '-c',
    `echo -e $SECRETS_ENV >> ./config/secrets.env && wget -O - https://raw.githubusercontent.com/api3dao/api-integrations/main/data/apis/${configData.apiProvider}/deployments/${configData.category}-deployments/${configData.filename} >> ./config/pusher.json && node --enable-source-maps dist/index.js`
  ];

  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[0].Environment[0].Value = secrets;
  CloudFormation.Resources.AppDefinition.Properties.ContainerDefinitions[0].EntryPoint = entryPoint;

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
