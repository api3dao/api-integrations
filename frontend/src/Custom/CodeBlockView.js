import { Text, VStack } from '@chakra-ui/react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { formatCode } from '../Helpers/Utils';

const CodeBlockView = ({ title, showLineNumbers = false, language = 'json', response }) => {
  return response === null ? null : (
    <VStack alignItems={'left'} width={'100%'}>
      <Text fontSize={'md'} fontWeight={'bold'}>
        {title}
      </Text>
      <CopyBlock
        text={formatCode(response, language === 'json')}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock={true}
      />
    </VStack>
  );
};

export default CodeBlockView;
