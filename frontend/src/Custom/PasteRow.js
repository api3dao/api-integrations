import React from 'react';
import { Text, Box, Flex, Spacer, VStack, Image, Input } from '@chakra-ui/react';
import { COLORS } from '../data/constants';

const NonEditableRow = ({ text, setText, color = 'black' }) => {
  const paste = () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard
        .readText()
        .then((text) => {
          setText(text);
        })
        .catch((err) => {
          console.error('Failed to read clipboard contents: ', err);
        });
    } else {
      alert('Clipboard API not available');
    }
  };

  return (
    <Box p={2} width={'100%'} borderRadius={'1'} borderColor={'black'} alignItems={'left'}>
      <Flex p={2} border={'1px'} borderRadius={'md'} borderColor={'gray.300'} alignItems={'center'}>
        <Text noOfLines={1} width={'100%'} color={color} fontSize={'md'}>
          {text}
        </Text>
        <Spacer />
        <Image cursor={'pointer'} marginLeft={'2'} onClick={paste} src={`./paste.svg`} width={'32px'} height={'32px'} />
      </Flex>
    </Box>
  );
};

const EditableRow = ({ text, setText, color = 'black' }) => {
  return (
    <Box p={2} width={'100%'} borderRadius={'1'} alignItems={'left'}>
      <Flex alignItems={'center'}>
        <Input
          bgColor={COLORS.info}
          value={text}
          onChange={(e) => setText(e.target.value)}
          color={color}
          fontSize={'md'}
        />
      </Flex>
    </Box>
  );
};

const PasteRow = ({ title, text, setText, margin = 0, color = 'black' }) => {
  return (
    <VStack direction="row" align="left" width={'100%'} m={margin}>
      <Text fontWeight={'bold'} fontSize={'md'}>
        {title}
      </Text>
      {navigator.clipboard && navigator.clipboard.readText ? (
        <NonEditableRow text={text} setText={setText} color={color} />
      ) : (
        <EditableRow text={text} setText={setText} color={color} />
      )}
    </VStack>
  );
};

export default PasteRow;
