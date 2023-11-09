import { Flex, Text, Image, Spacer } from '@chakra-ui/react';
import { COLORS, CONSTANTS } from '../data/constants';

const Header = () => {
  return (
    <Flex
      width={'100%'}
      height={'90px'}
      bg={COLORS.header}
      boxShadow={CONSTANTS.boxShadowSolid}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Flex as="header" align="center" justify="space-between" p={4}>
        <Flex align="flex-start" cursor="pointer" gap={'12px'}>
          <Image src={`./logo.svg`} width={'32px'} height={'32px'} />
          <Text fontWeight={'light'} fontSize="xl">
            API Integrations Tool
          </Text>
        </Flex>
        <Spacer />
        <Text fontWeight={'light'} fontSize="xs">
          v0.1.0 build 1
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
