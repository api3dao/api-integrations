import React from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const EditableRow = ({ text, setText }) => {
  return (
    <Input
      value={text || ''}
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
      <EditableRow text={text} setText={setText} />
    </Flex>
  );
};

export default SearchRow;
