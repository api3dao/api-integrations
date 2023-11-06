import { Flex, Text, VStack } from '@chakra-ui/react';
import TableView from './TableView';
import ExpandableView from './ExpandableView';
import { checkSupportedFeedsInBatches } from '../Helpers/Utils';

const fileIsMissing = () => {
  return (
    <VStack p={2} bgColor={'red'} borderRadius={'md'} alignItems={'left'} width={'100%'}>
      <Flex>
        <Text fontWeight={'bold'} color={'white'} fontSize={'md'}>
          API Data file is missing.
        </Text>
      </Flex>
    </VStack>
  );
};

const ListView = (table) => {
  return (
    <ExpandableView
      status={2}
      view={
        <VStack p={2} spacing={2} width={'100%'} align={'left'}>
          <Text fontSize={'sm'}>
            {'This deployment has unsupported feeds according to most recent API configuration specifications.'}
          </Text>
          <Text fontSize={'sm'}>
            {
              'This means that the deployment is either using a new feed that is not yet supported by the API, or that the deployment is using a feed that is no longer supported by the API.'
            }
          </Text>
          <Text fontSize={'sm'}>
            {'Please check if there is any candidate deployment present to replace current deployment'}
          </Text>
          <TableView
            parameters={table.table}
            headers={[
              { key: 'name', value: 'Name' },
              { key: 'status', value: 'Possible Reason' }
            ]}
          />
        </VStack>
      }
      header={'Unsupported Feeds'}
    ></ExpandableView>
  );
};

const UnsupportedFeedsView = ({ apiData, ois }) => {
  try {
    if (apiData === undefined || apiData == null) return fileIsMissing();
    const result = checkSupportedFeedsInBatches(apiData.config.supportedFeedsInBatches, [ois])[0];
    const feedsNotInConfig = result.unsupportedFeeds.map((feed) => ({
      name: feed.feed,
      status: 'Removed from feed list'
    }));

    const feedsNotInBatch = result.feedsNotInBatch.map((feed) => ({
      name: feed,
      status: 'New feed'
    }));

    const merged = [...feedsNotInConfig, ...feedsNotInBatch];
    return apiData === undefined ||
      (result.unsupportedFeeds.length === 0 && result.feedsNotInBatch.length === 0) ? null : (
      <ListView table={merged} />
    );
  } catch (error) {
    console.log(error);
  }
};

export default UnsupportedFeedsView;
