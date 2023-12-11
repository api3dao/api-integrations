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
        <Flex flexDirection={'row'} width={'100%'} justifyContent={'left'} alignItems={'center'}>
          <Image src={getLocation()} alt={'check'} width={'32px'} height={'32px'} />
          <Text fontSize="md" fontWeight="bold" ml={2}>
            {' '}
            {getStage()}{' '}
          </Text>
          <Spacer />
          <CloseIcon onClick={() => onExit(null)} cursor={'pointer'} />
        </Flex>
        <Flex flexDirection={'column'} justifyContent={'left'} alignItems={'left'} width={'250px'} height={'150px'}>
          <Text fontSize="md" fontWeight="bold">
            {' '}
            Description{' '}
          </Text>
          <Text fontSize="md" fontWeight="light">
            {status === undefined ? 'Deployment is not running at the moment.' : 'Deployment is running at the moment.'}
          </Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default InfoView;
