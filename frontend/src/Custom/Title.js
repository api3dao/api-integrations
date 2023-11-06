import React from 'react';
import { Text, Flex, Spacer, VStack } from '@chakra-ui/react';
import { ColorRing } from 'react-loader-spinner';
import { ArrowBackIcon } from '@chakra-ui/icons';

const Title = ({ isLoading, header, onClick, buttonVisibility = true, fontWeight = 'light', p = 3 }) => {
  return (
    <VStack p={p} alignItems={'left'}>
      <Flex alignItems={'center'} borderBottomWidth={1}>
        <Text fontWeight={fontWeight} fontSize={'2xl'} textUnderlineOffset={1}>
          {header}
        </Text>
        <Spacer />
        <ColorRing height="32px" width="32px" radius="9" color="green" ariaLabel="loading" visible={isLoading} />
        {!buttonVisibility ? null : (
          <ArrowBackIcon onClick={onClick} width={'30px'} height={'30px'} cursor={'pointer'} />
        )}
      </Flex>
    </VStack>
  );
};

export default Title;
