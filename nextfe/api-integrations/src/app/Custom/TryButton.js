import { Flex, VStack, Button, Spacer } from '@chakra-ui/react';
import { ColorRing } from 'react-loader-spinner';

const TryButton = ({ action, tryIt = false, isLoading = false }) => {
  return !tryIt ? null : (
    <VStack alignItems={'left'} width={'100%'}>
      <Flex>
        <Button
          colorScheme={'orange'}
          p={2}
          fontSize={'sm'}
          h={'50px'}
          w={'100px'}
          onClick={() => {
            action();
          }}
        >
          Try it out
        </Button>
        <Spacer />
        <ColorRing height="50px" width="50px" radius="9" color="green" ariaLabel="loading" visible={isLoading} />
      </Flex>
    </VStack>
  );
};

export default TryButton;
