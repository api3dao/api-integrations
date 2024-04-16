import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { COLORS } from '../data/constants';
import SearchRow from '../Custom/SearchRow';
import ApiProvider from '../Custom/ApiProvider';
import CodeBlockView from '../Custom/CodeBlockView';
import { checkValidEthAddresses } from '../Helpers/Utils';
import Title from '../Custom/Title';
import { getDeploymentStatus } from '../Helpers/DeploymentsLog';
import { ApiIntegrationsContext } from '../Context';
import InfoRow from '../Custom/InfoRow';

const SearchApiProvider = ({ providers, setProvider }) => {
  const [deployment, setDeployment] = useState(null);
  const [error, setError] = useState(null);

  const { setGrafanaLog, grafanaLog, airnodeAddress, setAirnodeAddress } = useContext(ApiIntegrationsContext);

  const getAirnodeAddress = () => {
    return localStorage.getItem('airnodeAddress');
  };

  useEffect(() => {
    if (grafanaLog !== null) return;
    setDeployment(null);
    setError(null);
    try {
      if (airnodeAddress !== null) {
        checkValidEthAddresses(airnodeAddress);
        const provider = providers.find(
          (provider) => provider.apiData.config.airnode.toUpperCase() === airnodeAddress.toUpperCase()
        );
        if (provider === undefined) {
          throw new Error(`Could not find provider with airnode address ${airnodeAddress}`);
        }
        setDeployment(provider);
        getDeploymentStatus(airnodeAddress, setGrafanaLog);
        localStorage.setItem('airnodeAddress', airnodeAddress); // add airnodeAddress to local storage
      }
    } catch (error) {
      setError(error);
    }
  }, [airnodeAddress, providers]);

  return (
    <Flex height="70vh" justifyContent="center" alignItems="center">
      <VStack
        p={10}
        bgColor={COLORS.table}
        borderRadius={'sm'}
        boxShadow="md"
        spacing={5}
        width={'95vw'}
        maxWidth={'1000px'}
        alignItems={'left'}
        justifyItems={'center'}
      >
        <Flex alignItems={'center'}>
          <Text fontSize={'4xl'} width={'100%'} align={'center'} fontWeight={'light'}>
            Search API Provider
          </Text>
          <Spacer />
        </Flex>
        <Flex p={3} border={'1px'} borderColor={'gray.300'} justifyContent={'left'} direction={'row'}>
          <SearchRow text={airnodeAddress} setText={setAirnodeAddress} margin={0} />
        </Flex>
        {deployment === null ? (
          <InfoRow text={getAirnodeAddress()} onClick={setAirnodeAddress} />
        ) : (
          <VStack width={'100%'} align={'left'}>
            <Title header={'Search results'} buttonVisibility={false} isLoading={false} fontWeight="semi-bold" p={0} />
            <ApiProvider deployment={deployment} setProvider={setProvider} onClick={() => {}} />
          </VStack>
        )}
        <CodeBlockView title={'An error occured'} response={error} />
      </VStack>
    </Flex>
  );
};

export default SearchApiProvider;
