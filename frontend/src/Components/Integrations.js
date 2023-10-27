import { VStack, Flex } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import Display from './Display';
import CompareEndpoints from './CompareEndpoints';
import { useContext } from 'react';
import { ApiIntegrationsContext } from '../Context';
import DeploymentCategory from '../Custom/DeploymentCategory';

const Integrations = ({ integrations }) => {
  const { config, comparePair } = useContext(ApiIntegrationsContext);

  return (
    <Flex spacing={4} overflow={'scroll'}>
      <VStack spacing={4} width={'100%'} alignItems={'center'} justifyItems={'stretch'}>
        <VStack p={1} bgColor={COLORS.canvas} spacing={4} width={'100%'} alignItems={'left'} justifyItems={'center'}>
          {config === null ? (
            <>
              {comparePair.left !== null && comparePair.right !== null ? (
                <CompareEndpoints oldOis={comparePair.left.ois} newOis={comparePair.right.ois} />
              ) : (
                <>
                  <DeploymentCategory category={"active"} header={'Active Deployments'} integrations={integrations.activeDeployment} />
                  <DeploymentCategory
                    category={"candidate"}
                    header={'Candidate Deployments'}
                    integrations={integrations.candidateDeployment}
                  />
                </>
              )}
            </>
          ) : (
            <Display configData={config} />
          )}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Integrations;
