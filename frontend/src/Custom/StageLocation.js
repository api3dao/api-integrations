import { VStack } from '@chakra-ui/react';
import { Box, Image } from '@chakra-ui/react';
import { CONSTANTS } from '../data/constants';

const Hero = ({ location, status }) => {
  const getStatus = (status) => {
    switch (status) {
      case CONSTANTS.RUNNING:
        return 'green.300';
      case CONSTANTS.STOPPED:
        return 'gray.300';
      case CONSTANTS.STARTING:
        return 'yellow.300';
      case CONSTANTS.STOPPING:
        return 'orange.300';
      case CONSTANTS.RESTARTING:
        return 'yellow.300';
      case CONSTANTS.REMOVING:
        return 'red.300';
      case CONSTANTS.PAUSED:
        return 'gray.300';
      case CONSTANTS.EXITED:
        return 'gray.300';
      case CONSTANTS.DEAD:
        return 'dead';
      default:
        return 'orange.300';
    }
  };

  const getLocation = () => {
    switch (location) {
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return './cloudFormation.svg';
      case CONSTANTS.DOCKER_DEPLOY:
        return './docker.svg';
      default:
        return './error.svg';
    }
  };

  return (
    <VStack spacing={0} direction="row" align="left">
      <Box width={'100%'} height={'100%'}>
        <Image boxShadow={'sm'} src={getLocation()} alt={'check'} width={'24px'} height={'24px'} />
        <Box height={'5px'} bgColor={getStatus()} width={'100%'}></Box>
      </Box>
    </VStack>
  );
};

export default Hero;
