import { CONSTANTS } from "../data/constants";
import JSZip from "jszip";

export const testMnemonic = (mnemonic) => {
  if (mnemonic.split(" ").length !== 12)
    return {
      status: false,
      message: "Invalid mnemonic: Mnemonic must be 12 words",
    };
  if (mnemonic.match(/[^a-zA-Z ]/))
    return {
      status: false,
      message: "Invalid mnemonic: Mnemonic must only contain letters",
    };
  return { status: true, message: "Valid mnemonic" };
};

export const populateOis = (
  configData,
  AIRNODE_WALLET_MNEMONIC,
  SECURITY_SCHEME_VALUES,
  ois,
  CloudFormation,
  mode = CONSTANTS.CLOUD_FORMATION_DEPLOY,
  callback
) => {
  const config = configData === null ? null : JSON.parse(configData);
  if (config == null) return;
  if (config.ois === null) return;
  if (config.ois.length === 0) return;

  if (config.airnodeWalletMnemonic === null) return;

  config.airnodeWalletMnemonic = AIRNODE_WALLET_MNEMONIC;
  config.apiCredentials = SECURITY_SCHEME_VALUES;

  const mnemonicTest = testMnemonic(AIRNODE_WALLET_MNEMONIC);
  if (mnemonicTest.status === false) {
    callback({ status: false, message: mnemonicTest.message, mode: mode });
    return;
  }

  let API_KEY = "";
  ois.forEach((ois) => {
    SECURITY_SCHEME_VALUES.forEach((item) => {
      API_KEY += `\\n${ois.title.toUpperCase()}_API_KEY=${item.securitySchemeValue
        }`;
    });
  });

  const secrets = `WALLET_MNEMONIC=${AIRNODE_WALLET_MNEMONIC}${API_KEY}`;
  switch (mode) {
    case CONSTANTS.CLOUD_FORMATION_DEPLOY:
      downloadCloudFormation(CloudFormation, secrets);
      break;
    case CONSTANTS.DOCKER_DEPLOY:
      downloadZip(secrets, configData);
      break;
    default:
      break;
  }

  callback({
    status: true,
    message: "File downloaded successfully",
    mode: mode,
  });
};

const downloadCloudFormation = (CloudFormation, secrets) => {
  CloudFormation.Resources.MyAppDefinition.Properties.ContainerDefinitions[0].Environment[0].Value =
    secrets;

  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(CloudFormation, null, 2)
  )}`;

  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "CloudFormation.json";
  link.click();
};

export const downloadZip = (secrets, config) => {
  var zip = new JSZip();
  zip.file("secrets.env", secrets.replaceAll(/(\\n)/g, "\n"));
  zip.file("pusher.json", config);

  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "pusher-config.zip");
  });
}

const saveAs = (blob, filename) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}