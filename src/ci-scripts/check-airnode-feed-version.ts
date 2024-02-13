import { nodeSettingsSchema } from '@api3/airnode-feed';
import { readJson } from '../config-generation/config-utils';

function main() {
  const issues = [];
  const DUMMY_MNEMONIC = 'online success junior focus title gauge timber old silk cereal kidney drip';

  const boilerplateConfig = readJson('./boilerplates/boilerplate-airnode-feed-config.json');
  boilerplateConfig.nodeSettings.airnodeWalletMnemonic = DUMMY_MNEMONIC;
  boilerplateConfig.nodeSettings.stage = 'aws';

  // check if generated configs will be created with correct nodeVersion
  try {
    nodeSettingsSchema.parse(boilerplateConfig.nodeSettings);
  } catch (error) {
    issues.push(`Possible nodeVersion mismatch in boilerplate configuration file. Error: ${error}`);
  }

  // check if CloudFormation template has the correct version
  const CFTemplate = readJson('./data/cloudformation-template.json');
  const imageName = CFTemplate.Resources.AppDefinition.Properties.ContainerDefinitions[1].Image;
  const regex = /\d+\.\d+\.\d+/;
  const imageVersion = imageName.match(regex)[0];

  boilerplateConfig.nodeSettings.nodeVersion = imageVersion;
  try {
    nodeSettingsSchema.parse(boilerplateConfig.nodeSettings);
  } catch (error) {
    issues.push(`Possible nodeVersion mismatch in CloudFormation template. Error: ${error}`);
  }

  if (issues.length > 0) {
    throw Error(JSON.stringify(issues, null, 2));
  }
}

main();
