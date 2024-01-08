import { Alert, AlertIcon, AlertTitle, AlertDescription, VStack, Box } from '@chakra-ui/react';

const BatchedOisInfo = ({ apiData, oisTitle }) => {
  const feeds = apiData.config.supportedFeedsInBatches[oisTitle];
  const batchedFeeds = feeds.filter((feedArray) => feedArray.length > 1);

  if (batchedFeeds.length > 0) {
    return (
      <Alert status="info">
        <AlertIcon />
        <Box>
          <AlertTitle>This OIS includes batched endpoint.</AlertTitle>
          <AlertDescription>
            A batched endpoint enables the retrieval of multiple values through a single API call. The Airnode feed can
            identify such endpoints, and despite encountering the same parameters for each feed, it optimizes efficiency
            by making only a single API call for these endpoints. You can see the same parameters for some feeds.
          </AlertDescription>
        </Box>
      </Alert>
    );
  }

  return <VStack />;
};

export default BatchedOisInfo;
