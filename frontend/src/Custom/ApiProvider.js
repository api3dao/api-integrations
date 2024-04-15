import { Text, Flex, Stack, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ApiProviderLogo } from '@api3/logos';
import { COLORS, CONSTANTS } from '../data/constants';

const Logo = ({ deployment, onClick }) => {
  return (
    <Flex alignItems={'center'} gap={2} onClick={() => onClick(-1)} p={5}>
      <Image src={ApiProviderLogo(deployment.alias)} width={'50px'} height={'50px'} />
      <Text fontSize={'2xl'} fontWeight={'light'}>
        |
      </Text>
      <Text fontSize={'md'} fontWeight={'bold'} cursor={'pointer'}>
        {deployment.name}
      </Text>
    </Flex>
  );
};

const Path = ({ stack, onClick }) => {
  if (stack === undefined || stack == null) {
    return null;
  }

  return stack.length === 0 ? null : (
    <Flex width={'100%'} gap={3} alignItems={'center'}>
      {stack.map((item, index) => (
        <Stack key={index} direction={'row'}>
          <ChevronRightIcon width={'30px'} height={'30px'} cursor={'pointer'} />
          <Text
            noOfLines={1}
            textAlign={'center'}
            bgColor={'gray.100'}
            p={2}
            borderRadius={'xl'}
            key={index}
            fontSize={'xs'}
            cursor={'pointer'}
            onClick={() => onClick(index)}
          >
            {item}
          </Text>
        </Stack>
      ))}
    </Flex>
  );
};

const ApiProvider = ({ deployment, setProvider, stack, onClick }) => {
  return deployment === undefined || deployment == null ? null : (
    <Flex cursor={setProvider === undefined ? 'auto' : 'pointer'}>
      <Flex
        p={3}
        gap={5}
        width={'100%'}
        height={'70px'}
        bg={COLORS.header}
        boxShadow={CONSTANTS.boxShadowSolid}
        alignItems={'center'}
        overflowX={'scroll'}
        overflowY={'hidden'}
        className="hide-scrollbar"
        onClick={() => (setProvider === undefined ? {} : setProvider(deployment))}
      >
        <Logo deployment={deployment} onClick={onClick} />
        <Path stack={stack} onClick={onClick} />
      </Flex>

      {stack === undefined || stack == null || stack.length === 0 ? null : (
        <Flex
          p={3}
          gap={3}
          height={'70px'}
          width={'70px'}
          bg={COLORS.table}
          boxShadow={CONSTANTS.boxShadowSolid}
          alignItems={'center'}
          justifyContent={'center'}
          onClick={onClick}
          cursor={'pointer'}
        >
          <ArrowBackIcon width={'30px'} height={'30px'} cursor={'pointer'} />
        </Flex>
      )}
    </Flex>
  );
};

export default ApiProvider;
