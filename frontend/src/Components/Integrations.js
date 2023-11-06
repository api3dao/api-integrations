import { VStack, Flex } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import Display from './Display';
import CompareEndpoints from './CompareEndpoints';
import { useContext } from 'react';
import { ApiIntegrationsContext } from '../Context';
import DeploymentCategory from '../Custom/DeploymentCategory';
import Title from '../Custom/Title';

const DeploymentsView = ({ integrations }) => {
  const { comparePair } = useContext(ApiIntegrationsContext);

  return comparePair.left !== null && comparePair.right !== null ? (
    <CompareEndpoints oldOis={comparePair.right.ois} newOis={comparePair.left.ois} />
  ) : (
    <VStack width={'100%'}>
      <DeploymentCategory
        header={'Active Deployments'}
        integrations={integrations.activeDeployment}
        apiData={integrations.apiData}
      />
      <DeploymentCategory
        header={'Candidate Deployments'}
        integrations={integrations.candidateDeployment}
        apiData={integrations.apiData}
      />
    </VStack>
  );
};

const Integrations = ({ integrations, setProvider }) => {
  const { config, setConfig, comparePair, setComparePair } = useContext(ApiIntegrationsContext);

  const detach = () => {
    if (comparePair.left !== null) {
      setComparePair({ left: null, right: null });
      return;
    }

    setComparePair({ left: null, right: null });

    if (config !== null) {
      setConfig(null);
      return;
    }

    setProvider(null);
  };

  return (
    <VStack
      p={3}
      bgColor={COLORS.table}
      borderRadius={'sm'}
      boxShadow="md"
      spacing={4}
      width={'95vw'}
      maxWidth={'1000px'}
      alignItems={'left'}
      justifyItems={'center'}
    >
      <Title
        header={config == null ? integrations.alias : config.filename}
        buttonVisibility={true}
        onClick={() => detach()}
        isLoading={false}
        fontWeight='semi-bold'
      />

      <Flex spacing={4} overflow={'scroll'}>
        <VStack spacing={4} width={'100%'} alignItems={'center'} justifyItems={'stretch'}>
          <VStack p={1} bgColor={COLORS.canvas} spacing={4} width={'100%'} alignItems={'left'} justifyItems={'center'}>
            {config === null ? (
              <DeploymentsView integrations={integrations} />
            ) : (
              <Display apiData={integrations.apiData} />
            )}
          </VStack>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Integrations;
