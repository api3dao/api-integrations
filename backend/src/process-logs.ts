import _ from 'lodash';
import { go } from '@api3/promise-utils';
import { AppType, pusherHeartbeatPayloadSchema } from './types';

export const processHeartbeatLogs = async (app: AppType, logs: any) => {
  if (logs.data.resultType !== 'streams')
    throw new Error(`Unexpected result type '${logs.data.resultType}', expected 'streams'`);

  const flattenLogs = logs.data.result
    .map((result) => result.values.map(([_lokiTimestamp, heartbeatPayload]) => JSON.parse(heartbeatPayload).context))
    .flat();

  switch (app) {
    case 'pusher': {
      const goParseHeartbeatLogs = await go(() =>
        Promise.all(flattenLogs.map((payload) => pusherHeartbeatPayloadSchema.parseAsync(payload)))
      );
      if (!goParseHeartbeatLogs.success)
        throw new Error(`Unable to parse heartbeat logs from pusher: ${goParseHeartbeatLogs.error.message}`);

      const parsedLogs = goParseHeartbeatLogs.data;
      //  Sort by timestamp in descending order to get latest logs
      const sortedLogs = _.reverse(_.sortBy(parsedLogs, 'currentTimestamp'));
      // Remove duplicate logs by configHash
      const uniqueLogs = _.uniqBy(sortedLogs, 'configHash');

      return uniqueLogs;
    }
    default: {
      throw new Error(`Unhandled app type ${app}`);
    }
  }
};
