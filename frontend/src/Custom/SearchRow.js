import React from 'react';
import { Text, Flex, Spacer, Image, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const NonEditableRow = ({ text, setText }) => {
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
    <Flex borderColor={'black.800'} width={'100%'} alignItems={'center'}>
      <Text noOfLines={1} width={'100%'} color={text === null ? 'gray.400' : 'black'} fontSize={'md'}>
        {text === null ? 'Paste your Airnode address here...' : text}
      </Text>
      <Spacer />
      <Image cursor={'pointer'} marginLeft={'2'} onClick={paste} src={`./paste.svg`} width={'24px'} height={'24px'} />
    </Flex>
  );
};

const EditableRow = ({ text, setText }) => {
  return (
    <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      color={'black'}
      fontSize={'md'}
      placeholder="Paste your Airnode address here..."
    />
  );
};

const SearchRow = ({ text, setText }) => {
  return (
    <Flex direction="row" align="left" alignItems={'center'} gap={3} width={'100%'}>
      <SearchIcon width={'32px'} height={'32px'} m={2} />

      {navigator.clipboard && navigator.clipboard.readText ? (
        <NonEditableRow text={text} setText={setText} />
      ) : (
        <EditableRow text={text} setText={setText} />
      )}
    </Flex>
  );
};

export default SearchRow;
