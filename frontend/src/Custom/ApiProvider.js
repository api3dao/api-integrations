import { Text, Image, VStack } from '@chakra-ui/react';
import { COLORS, CONSTANTS } from '../data/constants';

const ApiProvider = ({ deployment, setProvider }) => {
  return deployment === undefined || deployment == null ? null : (
    <VStack p={3} cursor={'pointer'}>
      <VStack
        minWidth={'150px'}
        height={'150px'}
        bg={COLORS.header}
        boxShadow={CONSTANTS.boxShadowSolid}
        justifyContent={'center'}
        onClick={() => setProvider(deployment)}
      >
        <Image
          src={`./providers/${deployment.alias}.png`}
          fallbackSrc={`./providers/${deployment.alias}.svg`}
          alt={deployment.alias}
          objectFit={'contain'}
          width={'100px'}
          height={'100px'}
        />

        <Text fontSize={'xs'} fontWeight={'light'}>
          {deployment.alias.toUpperCase()}
        </Text>
      </VStack>
    </VStack>
  );
};

export default ApiProvider;
