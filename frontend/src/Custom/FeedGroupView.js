import React from 'react';
import { VStack } from '@chakra-ui/react';
import ExpandableView from './ExpandableView';
import FeedRowView from './FeedRowView';

const FeedView = ({ endpoint, feed, apiSpecifications, status }) => {
  return feed.length === 0
    ? null
    : feed.map((feed, index) => (
        <VStack key={index} alignItems={'left'} width={'100%'}>
          <ExpandableView
            status={status}
            view={<FeedRowView endpoint={endpoint} feed={feed} apiSpecifications={apiSpecifications} tryit={false} />}
            header={feed.feed}
          />
        </VStack>
      ));
};

const FeedGroupView = ({ index, endpoint, feed, apiSpecifications, title, status }) => {
  return feed.length === 0 ? null : (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      <ExpandableView
        size="xl"
        status={0}
        view={<FeedView endpoint={endpoint} feed={feed} apiSpecifications={apiSpecifications} status={status} />}
        header={title}
      />
    </VStack>
  );
};

export default FeedGroupView;
