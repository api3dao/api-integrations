import React from 'react';
import { VStack } from '@chakra-ui/react';
import ExpandableView from './ExpandableView';
import FeedCompareRowView from './FeedCompareRowView';

const FeedCompareGroupView = ({ index, feed, oldServers, newEndpoint, oldEndpoint, newServers, status }) => {
  return feed.length === 0 ? null : (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      {feed.map((feed, index) => (
        <VStack key={index} alignItems={'left'} width={'100%'}>
          <ExpandableView
            status={status}
            view={
              <FeedCompareRowView
                feed={feed}
                newEndpoint={newEndpoint}
                oldEndpoint={oldEndpoint}
                oldServers={oldServers.servers}
                newServers={newServers.servers}
              />
            }
            header={feed.newFeed.feed}
          />
        </VStack>
      ))}
    </VStack>
  );
};

export default FeedCompareGroupView;
