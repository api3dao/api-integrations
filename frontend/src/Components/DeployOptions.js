import { VStack, Stack } from '@chakra-ui/react';
import { Flex, Image, Text } from '@chakra-ui/react';
import Title from '../Custom/Title';
import NumberedBox from '../Custom/NumberedBox';
import ImageButton from '../Custom/ImageButton';
import { useState } from 'react';
import Help from './Help';
import { CONSTANTS } from '../data/constants';
import { COLORS } from '../data/constants';

import { populateOis } from '../Helpers/DownloadConfig';

import { ApiIntegrationsContext } from '../Context';
import { useContext } from 'react';

const DeployOptions = ({ apiData }) => {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const [remarks, setRemarks] = useState(null);

  const { config } = useContext(ApiIntegrationsContext);

  const isSuccessful = (res) => {
    if (res.status === false) {
      setRemarks({
        message: res.message,
        color: COLORS.error,
        image: './error.svg'
      });
    }

    if (res.status === true) {
      setRemarks({
        message: res.message,
        color: COLORS.success,
        image: './success.svg'
      });
    }

    setTimeout(() => {
      setRemarks(null);
    }, 5000);
  };

  const setMode = (mode) => {
    switch (mode) {
      case CONSTANTS.DOCKER_DEPLOY:
        setSelected(CONSTANTS.DOCKER_DEPLOY);
        setStep(1);
        break;
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        setSelected(CONSTANTS.CLOUD_FORMATION_DEPLOY);
        setStep(1);
        break;
      default:
        setStep(0);
        break;
    }
  };

  const selectDownloadMode = () => {
    setRemarks(null);
    populateOis(config, selected, isSuccessful);
  };

  const getIcon = (mode) => {
    switch (mode) {
      case CONSTANTS.DOCKER_DEPLOY:
        return './docker.svg';
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return './cloudFormation.svg';
      default:
        return './download.svg';
    }
  };

  const getDeploymentLocations = () => {
    if (apiData === undefined) return [];
    return apiData.config.deploymentLocations;
  };

  return apiData === undefined ? null : (
    <VStack spacing={4} w={'100%'} direction="row" align="left">
      <Title header="Deploy" buttonVisibility={false} isLoading={false} />

      {step < 0 ? null : (
        <>
          <NumberedBox title={'Select a deployment mode'} number={1} />

          <Stack direction={'row'} spacing={'2'} justifyContent={'left'}>
            {getDeploymentLocations().map((location, index) => (
              <ImageButton
                key={index}
                inW={'50px'}
                outW={'100px'}
                onClick={() => setMode(location)}
                isSelected={selected === location}
                description={null}
                src={getIcon(location)}
              />
            ))}
          </Stack>
        </>
      )}

      {step < 1 ? null : (
        <>
          <NumberedBox title={'Download files'} number={2} />
          {remarks === null ? null : (
            <VStack p={2} bgColor={remarks.color} borderRadius={'md'} alignItems={'left'} width={'100%'}>
              <Flex>
                <Image src={remarks.image} alt={'error'} width={'30px'} height={'20px'} />
                <Text fontWeight={'bold'} fontSize={'md'}>
                  {remarks.message}
                </Text>
              </Flex>
            </VStack>
          )}
          <ImageButton
            inW={'50px'}
            outW={'100px'}
            onClick={() => selectDownloadMode()}
            description={null}
            src={'./download.svg'}
          />

          <NumberedBox title={'Deploy Pusher'} number={3} />
          <Flex>
            <Help mode={selected} />
          </Flex>
        </>
      )}
    </VStack>
  );
};

export default DeployOptions;
