import { Flex, Box, Image } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import InfoView from './InfoView';
import { CONSTANTS } from '../data/constants';
import { ApiIntegrationsContext } from '../Context';

const StageLocation = ({ location, hash }) => {
  const [info, setInfo] = useState('');

  const { grafanaLog } = useContext(ApiIntegrationsContext);
  const getStatus = () => {
    if (grafanaLog === null || grafanaLog === undefined) return './error.svg';
    return grafanaLog.find((log) => log.stage === location && log.configHash === hash);
  };

  const getStatusIcon = () => {
    if (getStatus() === undefined) return './error.svg';
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
    <Flex gap={1} direction="row" align="left" alignItems={'center'}>
      <Box
        bgImage={getLocation()}
        bgSize="auto"
        bgPosition="center"
        bgRepeat="no-repeat"
        w={'32px'}
        h={'32px'}
        position="relative"
        cursor={'pointer'}
        onClick={() => setInfo(location)}
      >
        <Image
          src={getStatusIcon()}
          alt={'check'}
          width={'12px'}
          height={'12px'}
          position="absolute"
          bottom="0"
          right="0"
        />
      </Box>
      {info === '' ? null : <InfoView location={location} status={getStatus()} onExit={() => setInfo('')} />}
    </Flex>
  );
};

export default StageLocation;
