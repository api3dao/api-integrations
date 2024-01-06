import _ from 'lodash';
import { ethers } from 'ethers';
import { go } from '@api3/promise-utils';
import { AirnodeFeedHeartbeatPayload, airnodeFeedHeartbeatPayloadSchema } from './types';
import { MIN_IN_MS } from './constants';
import { queryLogs } from './grafana-requests';

type ObjectWithoutSignatureAttribute = { [k in string] } & { ['signature']?: void };

interface GrafanaLokiResponse {
  status: string;
  data: {
    resultType: string;
    result: { values: [string, string][] }[];
  };
}
const createHash = (value: string) => ethers.utils.keccak256(ethers.utils.toUtf8Bytes(value));

// We need to make sure the object is stringified in the same way every time, so we sort the keys alphabetically.
const stringifyPayload = (payload: ObjectWithoutSignatureAttribute) =>
  JSON.stringify(payload, Object.keys(payload).sort());

const packAndHashPayload = (payload: ObjectWithoutSignatureAttribute) =>
  ethers.utils.arrayify(createHash(stringifyPayload(payload)));

const isAirnodeFeedHeartbeatPayloadValid = (data: AirnodeFeedHeartbeatPayload, queriedAirnode: string): Boolean => {
  const digest = packAndHashPayload(_.omit(data, 'signature'));
  const calculatedAirnode = ethers.utils.verifyMessage(digest, data.signature);
  return _.isEqual(calculatedAirnode, queriedAirnode);
};

export const extractUniqueAirnodeFeedHeartbeatPayloads = async (airnode: string) => {
  const goLogs = await go(() => queryLogs('airnode-feed', airnode, 'Sending heartbeat log', '30', '5m'));
  if (!goLogs.success) throw new Error(`Unable to query logs from Grafana: ${goLogs.error.message}`);

  const logs: GrafanaLokiResponse = goLogs.data.data;

  if (logs.data.resultType !== 'streams')
    throw new Error(`Unexpected result type '${logs.data.resultType}', expected 'streams'`);

  const payloads = logs.data.result
    .map((result) => result.values.map(([_lokiTimestamp, payload]) => JSON.parse(payload).context))
    .flat();

  const goParseHeartbeatPayloads = await go(() =>
    Promise.all(payloads.map((payload) => airnodeFeedHeartbeatPayloadSchema.parseAsync(payload)))
  );
  if (!goParseHeartbeatPayloads.success)
    throw new Error(`Unable to parse heartbeat payload from Airnode feed: ${goParseHeartbeatPayloads.error.message}`);

  const heartbeatPayloads = goParseHeartbeatPayloads.data;
  const filterPayloads = heartbeatPayloads
    .filter((payload) => new Date(parseInt(payload.currentTimestamp) * 1_000) >= new Date(Date.now() - 5 * MIN_IN_MS)) // We need to check timestamp to prevent replay attacks
    .filter((payload) => isAirnodeFeedHeartbeatPayloadValid(payload, airnode));

  //  Sort by timestamp in descending order to get latest logs
  const sortPayloads = _.reverse(_.sortBy(filterPayloads, 'currentTimestamp'));
  // Remove duplicate logs by configHash
  const uniqPayloads = _.uniqBy(sortPayloads, 'configHash');

  return uniqPayloads;
};
