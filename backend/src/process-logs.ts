import _ from 'lodash';
import { ethers } from 'ethers';
import { go } from '@api3/promise-utils';
import { AppType, PusherHeartbeatPayload, pusherHeartbeatPayloadSchema } from './types';
import { MIN_IN_MS } from './constants';

interface LokiResponse {
  status: string;
  data: {
    resultType: string;
    result: { values: [string, string][] }[];
  };
}
const createHash = (value: string) => ethers.utils.keccak256(ethers.utils.toUtf8Bytes(value));

// We need to make sure the object is stringified in the same way every time, so we sort the keys alphabetically.
const stringifyUnsignedHeartbeatPayload = (unsignedHeartbeatPayload: Omit<PusherHeartbeatPayload, 'signature'>) =>
  JSON.stringify(unsignedHeartbeatPayload, Object.keys(unsignedHeartbeatPayload).sort());

const packAndHashHeartbeatPayload = (unsignedHeartbeatPayload: Omit<PusherHeartbeatPayload, 'signature'>) =>
  ethers.utils.arrayify(createHash(stringifyUnsignedHeartbeatPayload(unsignedHeartbeatPayload)));

const isHeartbeatPayloadValid = (data: PusherHeartbeatPayload, queriedAirnode: string): Boolean => {
  const digest = packAndHashHeartbeatPayload(_.omit(data, 'signature'));
  const calculatedAirnode = ethers.utils.verifyMessage(digest, data.signature);
  return _.isEqual(calculatedAirnode, queriedAirnode);
};

export const extractHeartbeatPayloads = async (app: AppType, airnode: string, logs: LokiResponse) => {
  if (logs.data.resultType !== 'streams')
    throw new Error(`Unexpected result type '${logs.data.resultType}', expected 'streams'`);

  const payloads = logs.data.result
    .map((result) => result.values.map(([_lokiTimestamp, payload]) => JSON.parse(payload).context))
    .flat();

  switch (app) {
    case 'pusher': {
      const goParseHeartbeatPayloads = await go(() =>
        Promise.all(payloads.map((payload) => pusherHeartbeatPayloadSchema.parseAsync(payload)))
      );
      if (!goParseHeartbeatPayloads.success)
        throw new Error(`Unable to parse heartbeat payload from pusher: ${goParseHeartbeatPayloads.error.message}`);

      const heartbeatPayloads = goParseHeartbeatPayloads.data;
      const filterPayloads = heartbeatPayloads
        .filter(
          (payload) => new Date(parseInt(payload.currentTimestamp) * 1_000) >= new Date(Date.now() - 5 * MIN_IN_MS)
        ) // We need to check timestamp to prevent replay attacks
        .filter((payload) => isHeartbeatPayloadValid(payload, airnode));

      //  Sort by timestamp in descending order to get latest logs
      const sortPayloads = _.reverse(_.sortBy(filterPayloads, 'currentTimestamp'));
      // Remove duplicate logs by configHash
      const uniqPayloads = _.uniqBy(sortPayloads, 'configHash');

      return uniqPayloads;
    }
    default: {
      throw new Error(`Unknown app type ${app}`);
    }
  }
};
