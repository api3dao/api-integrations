import { Flex, Spacer, VStack } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { COLORS, CONSTANTS } from '../data/constants';
import { Text } from '@chakra-ui/react';
import { ApiIntegrationsContext } from '../Context';
import { useContext, useEffect } from 'react';
import ImageButton from '../Custom/ImageButton';
import StageLocation from '../Custom/StageLocation';

const IntegrationsRow = ({ config }) => {
  const { setConfig, setComparePair, comparePair } = useContext(ApiIntegrationsContext);

  const integration = config.config

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
    if (config.category === 'active') return false
    if (comparePair.right === null) return false
    return comparePair.left === null;
  };

  useEffect(() => {
    if (config.category !== 'active') return
    if (comparePair.right !== null) return
    setComparePair({ left: comparePair.left, right: integration });

  }, [config.category, comparePair, integration, setComparePair]);

  return (
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
        {integration === null ? (
          <Text fontSize={'md'} fontWeight={'bold'}>
            Not available
          </Text>
        ) : (
          <Flex width={'100%'} wrap={'wrap'}>
            <Stack direction={'row'} alignItems={'center'} spacing={5} wrap={'wrap'}>
              <Text minWidth={'400px'} fontSize={'md'} fontWeight={'bold'}>
                {config.filename}
              </Text>
              <StageLocation location={CONSTANTS.CLOUD_FORMATION_DEPLOY} />
              <StageLocation location={CONSTANTS.DOCKER_DEPLOY} />
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
              {
                !isCompareAvailable() ? null :
                  <ImageButton
                    inW="24px"
                    outW="48px"
                    onClick={() => {
                      compare();
                    }}
                    src={'./compare.svg'}
                  />
              }

            </Stack>
          </Flex>
        )}
      </Stack>
    </VStack>
  );
};

export default IntegrationsRow;
