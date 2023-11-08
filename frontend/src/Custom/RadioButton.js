import { Flex, VStack, Box, Text, Image } from '@chakra-ui/react';

const RadioButton = ({ bgColor, description, icon }) => {
  return (
    <VStack cursor={'pointer'} spacing={0} direction="row" align="left">
      <Box p={'1'} alignItems={'center'} width={'100px'} height={'100px'}>
        <Flex
          justify={'center'}
          bgColor={bgColor}
          width={'100%'}
          height={'100%'}
          borderRadius={'sm'}
          boxShadow="xs"
          alignItems={'center'}
        >
          <Image src={icon} width={'32px'} height={'32px'} />
        </Flex>
      </Box>
      <Box p={'1'} borderRadius={'10'} alignItems={'center'} width={'100px'} height={'50px'}>
        <Flex
          justify={'center'}
          bgColor={bgColor}
          width={'100%'}
          height={'100%'}
          borderRadius={'sm'}
          boxShadow="xs"
          alignItems={'center'}
        >
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {description}
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

export default RadioButton;
