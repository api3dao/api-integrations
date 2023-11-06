import React from 'react';
import { Text, Box, Flex, Spacer, VStack, Image, Input } from '@chakra-ui/react';
import { COLORS } from '../data/constants';

const NonEditableRow = ({ text, setText, color = 'black', bgColor = COLORS.main }) => {
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
    <Box p={2} width={'100%'} borderRadius={'1'} bgColor={bgColor} alignItems={'left'}>
      <Flex alignItems={'center'}>
        <Text noOfLines={1} width={'100%'} color={color} fontSize={'xl'}>
          {text}
        </Text>
        <Spacer />
        <Image cursor={'pointer'} marginLeft={'2'} onClick={paste} src={`./paste.svg`} width={'32px'} height={'32px'} />
      </Flex>
    </Box>
  );
};

const EditableRow = ({ text, setText, color = 'black', bgColor = COLORS.main }) => {
  return (
    <Box p={2} width={'100%'} borderRadius={'1'} bgColor={bgColor} alignItems={'left'}>
      <Flex alignItems={'center'}>
        <Input value={text} onChange={(e) => setText(e.target.value)} color={color} fontSize={'xl'} />
      </Flex>
    </Box>
  );
};

const PasteRow = ({ title, text, setText, margin = 0, color = 'black', bgColor = COLORS.main }) => {
  return (
    <VStack direction="row" align="left" width={'100%'} m={margin}>
      <Text fontWeight={'bold'} fontSize={'md'}>
        {title}
      </Text>
      {navigator.clipboard && navigator.clipboard.readText ? (
        <NonEditableRow text={text} setText={setText} color={color} bgColor={bgColor} />
      ) : (
        <EditableRow text={text} setText={setText} color={color} bgColor={bgColor} />
      )}
    </VStack>
  );
};

export default PasteRow;
