import { Flex, Spacer, VStack, Stack, Text, Button } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { COLORS } from '../data/constants';
import { ApiIntegrationsContext } from '../Context';
import StageLocation from '../Custom/StageLocation';

const DeploymentLocation = ({ apiData, category, hash }) => {
  const getDeploymentLocations = () => {
    if (apiData === undefined) return [];
    return apiData.config.deploymentLocations;
  };

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={5} wrap={'wrap'}>
      {getDeploymentLocations().map((location, index) => (
        <StageLocation key={index} location={location} index={index} category={category} hash={hash} />
      ))}
    </Stack>
  );
};

const IntegrationsRow = ({ config, apiData }) => {
  const { setConfig, setComparePair, comparePair } = useContext(ApiIntegrationsContext);

  const integration = config.config;

  const setView = () => {
    setConfig(config);
  };

  const compare = () => {
    if (config.category !== 'active') {
      setComparePair({ left: integration, right: comparePair.right });
      return;
    }
  };

  const isCompareAvailable = () => {
    if (config.category === 'active') return false;
    if (comparePair.right === null) return false;
    return comparePair.left === null;
  };

  useEffect(() => {
    if (config.category !== 'active') return;
    if (comparePair.right !== null) return;
    setComparePair({ left: comparePair.left, right: integration });
  }, [config.category, comparePair, integration, setComparePair]);

  return integration === undefined ? null : (
    <VStack spacing={0} direction="row" align="left">
      <Stack
        p={3}
        border={'1px'}
        borderColor={COLORS.main}
        bgColor={COLORS.table}
        width={'100%'}
        alignItems={'left'}
        spacing={'10'}
        direction={'row'}
      >
        <Flex width={'100%'} wrap={'wrap'}>
          <Stack direction={'row'} alignItems={'center'} spacing={5} wrap={'wrap'}>
            <Flex minWidth={'400px'} gap={1} align={'center'}>
              <Text fontSize={'md'} fontWeight={'bold'}>
                {config.filename[0].replace('.json', '')}
              </Text>
              <Text fontSize={'xs'} fontWeight={'light'}>{` (${config.category})`}</Text>
            </Flex>

            <DeploymentLocation apiData={apiData} category={config.category} hash={config.hash} />
          </Stack>
          <Spacer />
          <Stack direction={'row'}>
            <Button size={'sm'} colorScheme={'blue'} onClick={() => setView()}>
              View
            </Button>
            {!isCompareAvailable() ? null : (
              <Button size={'sm'} colorScheme={'blue'} onClick={() => compare()}>
                Compare
              </Button>
            )}
          </Stack>
        </Flex>
      </Stack>
    </VStack>
  );
};

export default IntegrationsRow;
