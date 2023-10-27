import { Flex, Spacer, VStack, Circle } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { COLORS } from '../data/constants';
import { Text } from '@chakra-ui/react';
import { ApiIntegrationsContext } from '../Context';
import { useContext, useEffect } from 'react';
import ImageButton from '../Custom/ImageButton';

const IntegrationsRow = ({ apiProvider, category, integration }) => {
  const { setConfig, setComparePair, comparePair, setDeploymentVariant } = useContext(ApiIntegrationsContext);

  const setView = () => {
    setConfig(integration);
    setDeploymentVariant({
      apiProvider: apiProvider,
      category: category,
      filename: integration.stage
    });
  };

  const compare = () => {
    if (category !== 'active') {
      setComparePair({ left: integration, right: comparePair.right });
      return;
    }
  };

  const isCompareAvailable = () => {
    if (category === 'active') return false
    if (comparePair.right === null) return false
    return comparePair.left === null;
  };

  useEffect(() => {
    if (category !== 'active') return
    if (comparePair.right !== null) return
    setComparePair({ left: comparePair.left, right: integration });

  }, [category, comparePair, integration, setComparePair]);

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
              <Circle size={'10px'} bgColor={'green.400'} />
              <Text minWidth={'400px'} fontSize={'md'} fontWeight={'bold'}>
                {integration.stage}
              </Text>
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
