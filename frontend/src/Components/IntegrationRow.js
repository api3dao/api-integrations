import { Flex, Spacer, VStack } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import { Text } from '@chakra-ui/react';
import { ApiIntegrationsContext } from '../Context';
import { useContext, useEffect } from 'react';
import ImageButton from '../Custom/ImageButton';
import StageLocation from '../Custom/StageLocation';

const DeploymentLocation = ({ apiData, category }) => {
  const getDeploymentLocations = () => {
    if (apiData === undefined) return [];
    return apiData.config.deploymentLocations;
  };

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={5} wrap={'wrap'}>
      {getDeploymentLocations().map((location, index) => (
        <StageLocation key={index} location={location} index={index} category={category} />
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
      >
        <Flex width={'100%'} wrap={'wrap'}>
          <Stack direction={'row'} alignItems={'center'} spacing={5} wrap={'wrap'}>
            <Text minWidth={'400px'} fontSize={'md'} fontWeight={'bold'}>
              {config.filename}
            </Text>
            <DeploymentLocation apiData={apiData} category={config.category} />
            <Text width={'100px'} p={1} fontSize={'xs'}>
              Pusher 0.0.1
            </Text>
          </Stack>
          <Spacer />
          <Stack direction={'row'}>
            <ImageButton
              inW="24px"
              outW="48px"
              onClick={() => {
                setView();
              }}
              src={'./view.svg'}
            />
            {!isCompareAvailable() ? null : (
              <ImageButton
                inW="24px"
                outW="48px"
                onClick={() => {
                  compare();
                }}
                src={'./compare.svg'}
              />
            )}
          </Stack>
        </Flex>
      </Stack>
    </VStack>
  );
};

export default IntegrationsRow;
