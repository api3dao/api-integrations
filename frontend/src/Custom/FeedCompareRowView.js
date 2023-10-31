import { Text, VStack } from '@chakra-ui/react';
import { getPath } from '../Helpers/Utils';
import { useState } from 'react';

import CodeBlockView from './CodeBlockView';
import PathView from './PathView';

const FeedView = ({ mode, endpoint, feed, servers, setError }) => {
  const getColor = (mode, darker = false) => {
    if (mode === 'active') {
      return darker ? 'green.400' : 'green.200';
    }

    return darker ? 'yellow.400' : 'yellow.200';
  };

  return (
    <VStack bgColor={getColor(mode)} alignItems={'left'} spacing={4} p={2} width={'100%'}>
      <Text bgColor={getColor(mode, true)} p={2} fontSize={'md'} fontWeight={'bold'}>
        [{mode.toUpperCase()}]
      </Text>
      <PathView
        method={endpoint.operation.method}
        path={getPath(endpoint.parameters, feed, servers, endpoint.operation.method, setError)}
      />
      <CodeBlockView title={'Post Processing'} showLineNumbers={true} language={'javascript'} response={feed.code} />
    </VStack>
  );
};

const FeedCompareRowView = ({ feed, oldServers, newEndpoint, oldEndpoint, newServers }) => {
  const [error, setError] = useState(null);
  return (
    <VStack alignItems={'left'} spacing={4} p={5} width={'100%'}>
      <FeedView
        mode={'deprecated'}
        endpoint={oldEndpoint}
        feed={feed.oldFeed}
        servers={oldServers}
        setError={setError}
      />
      <FeedView mode={'active'} endpoint={newEndpoint} feed={feed.newFeed} servers={newServers} setError={setError} />
      <CodeBlockView title={'Error'} response={error} />
    </VStack>
  );
};

export default FeedCompareRowView;
