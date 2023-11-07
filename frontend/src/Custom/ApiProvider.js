import { Text, Image, VStack, Flex, Spacer, Stack } from '@chakra-ui/react';
import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { COLORS, CONSTANTS } from '../data/constants';

const Path = ({ stack, onClick }) => {
  if (stack === undefined || stack == null) {
    return null;
  }

  return (
    stack.length === 0 ? null :
      <Flex width={"100%"} gap={3} alignItems={'center'}>
        {
          stack.map((item, index) => (
            <Stack direction={"row"}>
              <ChevronRightIcon width={'30px'} height={'30px'} cursor={'pointer'} />
              <Text bgColor={"gray.100"} p={2} borderRadius={"xl"} key={index} fontSize={'sm'} >
                {item}
              </Text>
            </Stack>
          ))
        }
        <Spacer />
        <ArrowBackIcon onClick={onClick} width={'30px'} height={'30px'} cursor={'pointer'} />
      </Flex>
  );

};


const ApiProvider = ({ deployment, setProvider, stack, onClick }) => {

  return deployment === undefined || deployment == null ? null : (
    <VStack cursor={'pointer'}>
      <Flex
        p={3}
        gap={3}
        width={'100%'}
        height={'70px'}
        bg={COLORS.header}
        boxShadow={CONSTANTS.boxShadowSolid}
        alignItems={'center'}
        onClick={() => setProvider(deployment)}
      >
        <Image
          src={`./providers/${deployment.alias}.png`}
          fallbackSrc={`./providers/${deployment.alias}.svg`}
          alt={deployment.alias}
          objectFit={'contain'}
          width={'50px'}
          height={'50px'}
        />
        <Text fontSize={'2xl'} fontWeight={'light'}>
          |
        </Text>
        <Text fontSize={'md'} fontWeight={'semi-bold'}>
          {deployment.alias.toUpperCase()}
        </Text>
        <Path stack={stack} onClick={onClick} />
      </Flex>
    </VStack>
  );
};

export default ApiProvider;
