import { VStack, Box, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import { CONSTANTS } from '../data/constants';
import { ApiIntegrationsContext } from '../Context';

const StageLocation = ({ location, hash }) => {
  const { grafanaLog } = useContext(ApiIntegrationsContext);
  const getStatus = () => {
    if (grafanaLog === null) return './error.svg';
    const isRunning = grafanaLog.find((log) => log.stage === location && log.configHash === hash);
    if (isRunning === undefined) return './error.svg';

    return './success.svg';
  };

  const getLocation = () => {
    switch (location) {
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return './cloudFormation.svg';
      case CONSTANTS.DOCKER_DEPLOY:
        return './docker.svg';
      default:
        return './docker.svg';
    }
  };

  return (
    <VStack spacing={0} direction="row" align="left">
      <Box
        bgImage={getLocation()}
        bgSize="auto"
        bgPosition="center"
        bgRepeat="no-repeat"
        w={'32px'}
        h={'32px'}
        position="relative"
      >
        <Image
          src={getStatus()}
          alt={'check'}
          width={'12px'}
          height={'12px'}
          position="absolute"
          bottom="0"
          right="0"
        />
      </Box>
    </VStack>
  );
};

export default StageLocation;
