import { Text, VStack, Flex } from '@chakra-ui/react';

const PathView = ({ method, path }) => {
  const getColor = (method, darker) => {
    if (method === 'get') return darker ? 'blue.300' : 'blue.200';
    if (method === 'post') return darker ? 'green.300' : 'green.200';
    return 'yellow.300';
  };

  return path === null ? null : (
    <VStack alignItems={'left'} width={'100%'}>
      <Text fontSize={'md'} fontWeight={'bold'}>
        HTTP Request
      </Text>
      <Flex maxW={'100%'}>
        <Text bgColor={getColor(method, true)} p={2} fontSize={'sm'} fontWeight={'bold'}>
          {method.toUpperCase()}
        </Text>
        <Text bgColor={getColor(method, false)} p={2} fontSize={'sm'} noOfLines={0}>
          {path}
        </Text>
      </Flex>
    </VStack>
  );
};

export default PathView;
