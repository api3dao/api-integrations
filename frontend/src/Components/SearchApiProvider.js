import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import { SearchIcon } from '@chakra-ui/icons';
import PasteRow from '../Custom/PasteRow';
import { useEffect, useState } from 'react';
import ApiProvider from '../Custom/ApiProvider';
import CodeBlockView from '../Custom/CodeBlockView';
import { checkValidEthAddresses } from '../Helpers/Utils';

const SearchApiProvider = ({ providers, setProvider }) => {
  const [airnodeAddress, setAirnodeAddress] = useState(null);
  const [deployment, setDeployment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDeployment(null);
    setError(null);
    try {
      if (airnodeAddress !== null) {
        checkValidEthAddresses(airnodeAddress);
        const provider = providers.find((provider) => provider.apiData.config.airnode === airnodeAddress);
        if (provider === undefined) {
          throw new Error(`Could not find provider with airnode address ${airnodeAddress}`);
        }
        setDeployment(provider);
      }
    } catch (error) {
      setError(error);
    }
  }, [airnodeAddress, providers, setProvider]);

  return (
    <VStack
      p={10}
      bgColor={COLORS.table}
      borderRadius={'sm'}
      boxShadow="md"
      spacing={10}
      width={'95vw'}
      maxWidth={'1000px'}
      alignItems={'left'}
      justifyItems={'center'}
    >
      <Flex alignItems={'center'}>
        <SearchIcon width={'32px'} height={'32px'} mr={2} />
        <Text fontSize={'3xl'} fontWeight={'light'}>
          Search Api Provider
        </Text>
        <Spacer />
      </Flex>
      <Text fontSize={'md'} fontWeight={'light'}>
        Copy your airnode address and paste it below
      </Text>
      <Flex justifyContent={'left'} direction={'row'}>
        <PasteRow
          title={'Airnode address'}
          text={airnodeAddress}
          setText={setAirnodeAddress}
          margin={0}
          bgColor={COLORS.info}
        />
      </Flex>
      <Flex justifyContent={'left'} direction={'row'}>
        <ApiProvider deployment={deployment} setProvider={setProvider} />
      </Flex>
      <CodeBlockView title={'An error occured'} response={error} />
    </VStack>
  );
};

export default SearchApiProvider;
