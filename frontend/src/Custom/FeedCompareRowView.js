import { Text, VStack } from '@chakra-ui/react';
import { getPath } from '../Helpers/Utils';
import { useState } from 'react';

import CodeBlockView from './CodeBlockView';
import PathView from './PathView';

const FeedCompareRowView = ({ feed, oldServers, newEndpoint, oldEndpoint, newServers }) => {
  const [error, setError] = useState(null);

  return (
    <VStack alignItems={'left'} spacing={4} p={5} width={'100%'}>
      <VStack bgColor={'yellow.200'} alignItems={'left'} spacing={4} p={2} width={'100%'}>
        <Text bgColor={'yellow.400'} p={2} fontSize={'md'} fontWeight={'bold'}>
          [DEPRECATED]
        </Text>
        <PathView
          method={newEndpoint.operation.method}
          path={getPath(oldEndpoint.parameters, feed.oldFeed, oldServers, oldEndpoint.operation.method, setError)}
        />
        <CodeBlockView
          title={'Post Processing'}
          showLineNumbers={true}
          language={'javascript'}
          response={feed.oldFeed.code}
        />
      </VStack>

      <VStack bgColor={'green.200'} alignItems={'left'} spacing={4} p={2} width={'100%'}>
        <Text bgColor={'green.400'} p={2} fontSize={'md'} fontWeight={'bold'}>
          [ACTIVE]
        </Text>
        <PathView
          method={newEndpoint.operation.method}
          path={getPath(newEndpoint.parameters, feed.newFeed, newServers, newEndpoint.operation.method, setError)}
        />
        <CodeBlockView
          title={'Post Processing'}
          showLineNumbers={true}
          language={'javascript'}
          response={feed.newFeed.code}
        />
      </VStack>
      <CodeBlockView title={'Error'} response={error} />
    </VStack>
  );
};

export default FeedCompareRowView;
