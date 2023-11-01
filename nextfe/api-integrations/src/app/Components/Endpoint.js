import { VStack } from '@chakra-ui/react';
import FeedRowView from '../Custom/FeedRowView';
import { combine } from '../Helpers/Utils';
import { log } from '../Helpers/Logger';
import ExpandableView from '../Custom/ExpandableView';

const Endpoint = ({ endpoint, apiSpecifications, oisTitle }) => {
  const error = (error) => {
    log('ERROR', [error]);
  };

  return (
    <VStack alignItems={'left'}>
      {combine(endpoint, error).map((feed, index) => (
        <VStack key={index} alignItems={'left'} width={'100%'}>
          <ExpandableView
            view={
              <FeedRowView endpoint={endpoint} feed={feed} apiSpecifications={apiSpecifications} oisTitle={oisTitle} />
            }
            header={feed.feed}
          />
        </VStack>
      ))}
    </VStack>
  );
};

export default Endpoint;
