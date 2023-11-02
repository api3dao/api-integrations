import { Flex, Text, VStack } from '@chakra-ui/react';
import { checkSupportedFeedsInBatches } from '../Helpers/Utils';
import TableView from './TableView';
import ExpandableView from './ExpandableView';

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
        <TableView
          parameters={table}
          headers={[
            { key: 'name', value: 'Name' },
            { key: 'status', value: 'Status' }
          ]}
        />
      }
      header={'Unsupported Feeds'}
    ></ExpandableView>
  );
};

const UnsupportedFeedsView = ({ apiData, ois }) => {
  try {
    if (apiData === undefined || apiData == null) return fileIsMissing();
    const result = checkSupportedFeedsInBatches(apiData.config.supportedFeedsInBatches, [ois])[0];
    const table = result.unsupportedFeeds.map((feed, index) => ({
      name: feed.feed,
      status: 'Could not find feed in config file.'
    }));

    return apiData === undefined || result.unsupportedFeeds.length === 0 ? null : <ListView table={table} />;
  } catch (error) {
    console.log(error);
  }
};

export default UnsupportedFeedsView;
