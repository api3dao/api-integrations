import AWS from 'aws-sdk';
import type { CreateTableInput } from 'aws-sdk/clients/dynamodb';

require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const localAWSConfig = {
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
  region: 'local',
  endpoint: 'http://localhost:8000'
};

AWS.config.update(localAWSConfig);

const ddbClient = new AWS.DynamoDB();

export const GRAFANA_LOKI_ACCESS_REGISTRY_TABLE_SCHEMA = {
  TableName: 'grafanaLokiAccessRegistry',
  KeySchema: [{ AttributeName: 'airnode', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'airnode', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

export async function createTable(params: CreateTableInput) {
  console.log('Creating table with params:', params);
  try {
    await ddbClient.createTable(params).promise();
    console.log(`Table (${params.TableName}) created successfully.`);
  } catch (error) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(error, null, 2));
  }
}

const main = async () => {
  await createTable(GRAFANA_LOKI_ACCESS_REGISTRY_TABLE_SCHEMA);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
