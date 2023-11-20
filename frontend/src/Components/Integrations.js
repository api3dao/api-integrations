import { VStack, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import Display from './Display';
import CompareEndpoints from './CompareEndpoints';
import { COLORS } from '../data/constants';
import { ApiIntegrationsContext } from '../Context';
import DeploymentCategory from '../Custom/DeploymentCategory';
import ApiProvider from '../Custom/ApiProvider';
import Title from '../Custom/Title';

const DeploymentsView = ({ integrations }) => {
  const { comparePair } = useContext(ApiIntegrationsContext);

  return comparePair.left !== null && comparePair.right !== null ? (
    <CompareEndpoints oldOis={comparePair.right.ois} newOis={comparePair.left.ois} />
  ) : (
    <VStack width={'100%'} align={'left'}>
      <Title header={'Deployments'} buttonVisibility={false} isLoading={false} p={0} />
      <DeploymentCategory integrations={integrations} apiData={integrations.apiData} />
    </VStack>
  );
};

const Integrations = ({ integrations, setProvider }) => {
  const { config, setConfig, comparePair, setComparePair, setGrafanaLog } = useContext(ApiIntegrationsContext);

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
    setGrafanaLog(null);
    setProvider(null);
  };

  const getStack = () => {
    if (comparePair.left !== null) {
      return ['deployments', 'compare'];
    }

    if (config !== null) {
      const category = config.category;
      const deployment = config.filename[0].replace('.json', '');
      return ['deployments', `${deployment} (${category})`];
    }

    return ['deployments'];
  };

  return (
    <VStack
      p={10}
      bgColor={COLORS.table}
      borderRadius={'sm'}
      boxShadow="md"
      spacing={4}
      width={'95vw'}
      maxWidth={'1000px'}
      alignItems={'left'}
      justifyItems={'center'}
    >
      <ApiProvider deployment={integrations} stack={getStack()} onClick={() => detach()} />

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
