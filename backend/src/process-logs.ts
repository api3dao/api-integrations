import _ from 'lodash';
import { ethers } from 'ethers';
import { go } from '@api3/promise-utils';
import { serializePlainObject, createSha256Hash } from '@api3/commons';
import { AirnodeFeedHeartbeatPayload, airnodeFeedHeartbeatPayloadSchema } from './types';
import { MIN_IN_MS } from './constants';
import { queryLogs } from './grafana-requests';
import { isVersionLower, stringifyPayload } from './utils';

interface GrafanaLokiResponse {
  status: string;
  data: {
    resultType: string;
    result: { stream: { airnode: string; app: string; ecs_task_arn: string }; values: [string, string][] }[];
  };
}

const parseAWSRegionFromARN = (arn: string): string => {
  const arnParts = arn.split(':');
  if (arnParts.length >= 4 && arnParts[0] === 'arn' && arnParts[1] === 'aws') {
    return arnParts[3];
  } else {
    return '';
  }
};

const isAirnodeFeedHeartbeatPayloadValid = (data: AirnodeFeedHeartbeatPayload, queriedAirnode: string): Boolean => {
  const unsignedPayload = _.omit(data, 'signature');

  let digest;

  if (isVersionLower(data.nodeVersion, '0.6.0')) {
    digest = ethers.utils.arrayify(ethers.utils.keccak256(ethers.utils.toUtf8Bytes(stringifyPayload(unsignedPayload))));
  } else {
    digest = ethers.utils.arrayify(createSha256Hash(serializePlainObject(unsignedPayload)));
  }
  const calculatedAirnode = ethers.utils.verifyMessage(digest, data.signature);
  return _.isEqual(calculatedAirnode, queriedAirnode);
};

export const extractUniqueAirnodeFeedHeartbeatPayloads = async (airnode: string) => {
  const goLogs = await go(() => queryLogs('airnode-feed', airnode, 'Sending heartbeat log', '30', '5m'));
  if (!goLogs.success) throw new Error(`Unable to query logs from Grafana: ${goLogs.error.message}`);

  const logs: GrafanaLokiResponse = goLogs.data.data;

  if (logs.data.resultType !== 'streams')
    throw new Error(`Unexpected result type '${logs.data.resultType}', expected 'streams'`);

  const flattenLogs = logs.data.result
    .map(({ stream, values }) => values.map(([_lokiTimestamp, payload]) => ({ payload, stream })))
    .flat();

  const goParseLogs = await go(() =>
    Promise.all(
      flattenLogs.map(async ({ payload, stream }) => {
        const heartbeatPayload = await airnodeFeedHeartbeatPayloadSchema.parseAsync(JSON.parse(payload));
        return {
          payload: heartbeatPayload,
          stream
        };
      })
    )
  );
  if (!goParseLogs.success)
    throw new Error(`Unable to parse heartbeat payload from Airnode feed: ${goParseLogs.error.message}`);

  const parsedLogs = goParseLogs.data;
  const filterLogs = parsedLogs
    .filter(
      ({ payload }) => new Date(parseInt(payload.currentTimestamp) * 1_000) >= new Date(Date.now() - 5 * MIN_IN_MS)
    ) // We need to check timestamp to prevent replay attacks
    .filter(({ payload }) => isAirnodeFeedHeartbeatPayloadValid(payload, airnode));

  //  Sort by timestamp in descending order to get latest logs
  const sortLogs = _.reverse(_.sortBy(filterLogs, ({ payload }) => payload.currentTimestamp));
  // Remove duplicate logs by configHash and deploymentTimestamp
  const uniqLogs = _.uniqBy(sortLogs, ({ payload }) => `${payload.configHash}-${payload.deploymentTimestamp}`);

  const uniqHeartbeatPayloadsWithRegion = uniqLogs.map(({ payload, stream }) => ({
    ...payload,
    region: parseAWSRegionFromARN(stream.ecs_task_arn)
  }));

  return uniqHeartbeatPayloadsWithRegion;
};
