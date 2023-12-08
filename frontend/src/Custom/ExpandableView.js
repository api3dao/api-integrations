import { Text, Flex, Spacer, VStack, Box } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { SymbolLogo } from 'beta-logos';
import { COLORS, CONSTANTS } from '../data/constants';

const Logos = ({ feed, isFeed }) => {
  return !isFeed ? null : (
    <Flex gap={1}>
      <SymbolLogo id={feed[0]} width={'24px'} height={'24px'} />
      <SymbolLogo id={feed[1]} width={'24px'} height={'24px'} />
    </Flex>
  );
};

const ExpandableView = ({ view, header, defaultState = false, status = 0, size = 'md' }) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const getColor = () => {
    switch (status) {
      case 0:
        return COLORS.info;
      case 1:
        return 'green.300';
      case 2:
        return 'red.300';
      case 3:
        return 'blue.300';
      case 4:
        return 'purple.300';
      case 5:
        return COLORS.main;
      default:
        return 'gray.300';
    }
  };

  const isFeed = header.includes('/');

  return (
    <VStack
      alignItems={'left'}
      p={2}
      borderColor={COLORS.main}
      boxShadow={CONSTANTS.boxShadowLight}
      width={'100%'}
      onClick={() => setIsOpen(!isOpen)}
      cursor={'pointer'}
    >
      <Box p={2} alignItems={'center'} borderRadius={'sm'} bgColor={getColor()}>
        <Flex gap={3} alignItems={'center'}>
          <Logos feed={header.split('/')} isFeed={isFeed} />
          <Text fontWeight={'bold'} fontSize={size}>
            {header}
          </Text>
          <Spacer />
          {isOpen ? (
            <TriangleUpIcon width={'24px'} height={'24px'} cursor={'pointer'} />
          ) : (
            <TriangleDownIcon width={'24px'} height={'24px'} cursor={'pointer'} />
          )}
        </Flex>
      </Box>
      {isOpen ? view : null}
    </VStack>
  );
};

export default ExpandableView;
