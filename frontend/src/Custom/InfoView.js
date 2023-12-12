import * as React from 'react';
import { Flex, Spacer, Text, Image, VStack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CONSTANTS } from '../data/constants';

const InfoView = ({ location, status, onExit }) => {
  const getLocation = () => {
    switch (location) {
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return './cloudFormation.svg';
      case CONSTANTS.DOCKER_DEPLOY:
        return './docker.svg';
      default:
        return './cloudFormation.svg';
    }
  };

  const getStage = () => {
    switch (location) {
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return 'AWS Cloud Formation';
      case CONSTANTS.DOCKER_DEPLOY:
        return 'Docker';
      default:
        return 'AWS Cloud Formation';
    }
  };

  return (
    <VStack className="backgroundBlur">
      <Flex className="floatingRectangle infoBox">
        <Flex
          p={3}
          flexDirection={'row'}
          width={'100%'}
          justifyContent={'left'}
          alignItems={'center'}
          bgColor={'gray.100'}
        >
          <Text fontSize="md" fontWeight="bold">
            Airnode Feed Deployment Status
          </Text>
          <Spacer />
          <CloseIcon onClick={() => onExit(null)} cursor={'pointer'} />
        </Flex>
        <Flex gap={5} flexDirection={'column'} justifyContent={'left'} alignItems={'left'} width={'100%'}>
          <Flex gap={2} flexDirection={'column'} justifyContent={'left'} alignItems={'left'} width={'100%'}>
            <Text fontSize="md" fontWeight="bold">
              Deployment Location
            </Text>
            <Flex gap={2} flexDirection={'row'} justifyContent={'left'} alignItems={'center'}>
              <Image src={getLocation()} alt={'check'} width={'32px'} height={'32px'} />
              <Text fontSize="md" fontWeight="light">
                {getStage()}
              </Text>
            </Flex>
          </Flex>
          <Flex gap={2} flexDirection={'column'} justifyContent={'left'} alignItems={'left'} width={'100%'}>
            <Text fontSize="md" fontWeight="bold">
              Status
            </Text>
            <Flex gap={2} flexDirection={'row'} justifyContent={'left'} alignItems={'center'}>
              <Image
                src={status === undefined ? './error.svg' : './success.svg'}
                alt={'check'}
                width={'24px'}
                height={'24px'}
              />
              <Text fontSize="md" fontWeight="light">
                {status === undefined ? 'Not running' : 'Running'}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default InfoView;
