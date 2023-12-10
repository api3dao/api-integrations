import { useState } from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import Integrations from './Integrations';
import SearchApiProvider from './SearchApiProvider';
import { checkFiles } from '../Helpers/FetchApis';

const Welcome = () => {
  const [provider, setProvider] = useState(null);

  const configFiles = ((ctx) => {
    return checkFiles(ctx);
  })(require.context('../../../data/apis/', true, /([a-z0-9-]+-airnode-feed.json|api-data.json)/));

  return (
    <Flex spacing={4} height={'100vh'} overflow={'scroll'} className="hide-scrollbar">
      <VStack spacing={4} width={'100%'} alignItems={'center'} justifyItems={'stretch'}>
        {provider === null ? (
          <SearchApiProvider providers={configFiles} setProvider={setProvider} />
        ) : (
          <Integrations integrations={provider} setProvider={setProvider} />
        )}
      </VStack>
    </Flex>
  );
};

export default Welcome;
