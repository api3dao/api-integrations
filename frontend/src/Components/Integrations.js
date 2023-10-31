import { VStack, Flex } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import Display from './Display';
import CompareEndpoints from './CompareEndpoints';
import { useContext } from 'react';
import { ApiIntegrationsContext } from '../Context';
import DeploymentCategory from '../Custom/DeploymentCategory';

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

const Integrations = ({ integrations }) => {
  const { config } = useContext(ApiIntegrationsContext);

  return (
    <Flex spacing={4} overflow={'scroll'}>
      <VStack spacing={4} width={'100%'} alignItems={'center'} justifyItems={'stretch'}>
        <VStack p={1} bgColor={COLORS.canvas} spacing={4} width={'100%'} alignItems={'left'} justifyItems={'center'}>
          {config === null ? (
            <DeploymentsView integrations={integrations} />
          ) : (
            <Display configData={config} apiData={integrations.apiData} />
          )}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Integrations;
