import { Text, Image, VStack, Flex } from '@chakra-ui/react';
import { COLORS, CONSTANTS } from '../data/constants';

const ApiProvider = ({ deployment, setProvider }) => {
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
      </Flex>
    </VStack>
  );
};

export default ApiProvider;
