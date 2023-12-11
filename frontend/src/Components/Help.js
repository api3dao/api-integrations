import { VStack, Image, Text, Flex, Box } from '@chakra-ui/react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { useState } from 'react';
import Steps from '../Custom/Steps';
import { COLORS, CONSTANTS } from '../data/constants';
import ImageButton from '../Custom/ImageButton';

const DeployLocationButton = ({ mode, src, isSelected, setDockerMode }) => {
  return (
    <ImageButton
      inW={'30px'}
      outW={'40px'}
      onClick={() => setDockerMode(mode)}
      isSelected={isSelected}
      description={null}
      src={src}
    />
  );
};

const Help = ({ mode }) => {
  const [dockerMode, setDockerMode] = useState(CONSTANTS.WINDOWS);

  const dockerCmd = `docker run -it --rm \\
      -e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \\
      -v "$(pwd):/app/config" \\
      api3/airnode-feed deploy`;

  const dockerCmdWindows = `docker run -it --rm ^
      -v "%cd%:/app/config" ^
      api3/airnode-feed deploy`;

  const getDockerCmd = () => {
    switch (dockerMode) {
      case CONSTANTS.WINDOWS:
        return dockerCmdWindows;
      case CONSTANTS.MAC:
        return dockerCmd;
      case CONSTANTS.LINUX:
        return dockerCmd;
      default:
        return dockerCmd;
    }
  };

  const getIcon = () => {
    switch (mode) {
      case CONSTANTS.DOCKER_DEPLOY:
        return './docker.svg';
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return './cloudFormation.svg';
      default:
        return './info.svg';
    }
  };

  const getTtile = () => {
    switch (mode) {
      case CONSTANTS.DOCKER_DEPLOY:
        return 'Run as a docker container';
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return 'Upload to AWS Cloud Formation';
      default:
        return 'Deployment options';
    }
  };

  const getDescrption = () => {
    switch (mode) {
      case CONSTANTS.DOCKER_DEPLOY:
        return [
          'Copy and paste the commands below to your terminal at the root directory your config.json and secrets.env files are.',
          'Complete one deployment at at time.'
        ];
      case CONSTANTS.CLOUD_FORMATION_DEPLOY:
        return [
          'Download the CloudFormation template by clicking the button below.',
          'Enter your mnemonic on specified field before upload your template.',
          'Go to CloudFormation section in the AWS dashboard, and upload your template',
          "Wait for AWS to deploy everything and check CloudWatch log group named myAppLogs to see what's up.",
          'After 1 or 2 minutes, you should see your signed data in https://pool.nodary.io/ after a successful deployment.'
        ];
      default:
        return [
          'Fill in the form and select a deployment method',
          'Wallet mnemonic is mandatory',
          'Enter at least one OIS',
          'Enter at least one API key'
        ];
    }
  };

  return (
    <VStack spacing={1} bgColor={COLORS.info} w={'100%'} direction="row" align="left">
      <Flex alignItems={'center'} direction={'row'} p={3}>
        <Image borderRadius={'lg'} src={getIcon()} alt={'error'} width={'40px'} height={'40px'} />
        <Box p={2}>
          <Text fontWeight={'bold'} fontSize={'lg'}>
            {getTtile()}
          </Text>
        </Box>
      </Flex>
      <Steps steps={getDescrption()} />
      {mode !== CONSTANTS.DOCKER_DEPLOY ? null : (
        <VStack p={5} width={'100%'} align={'left'}>
          <VStack bgColor={COLORS.main} alignItems={'left'} p={2} width={'100%'}>
            <Flex>
              <DeployLocationButton
                mode={CONSTANTS.WINDOWS}
                src={'./windows.svg'}
                isSelected={dockerMode === CONSTANTS.WINDOWS}
                setDockerMode={setDockerMode}
              />
              <DeployLocationButton
                mode={CONSTANTS.MAC}
                src={'./mac.svg'}
                isSelected={dockerMode === CONSTANTS.MAC}
                setDockerMode={setDockerMode}
              />
              <DeployLocationButton
                mode={CONSTANTS.LINUX}
                src={'./linux.svg'}
                isSelected={dockerMode === CONSTANTS.LINUX}
                setDockerMode={setDockerMode}
              />
            </Flex>
            <CopyBlock
              text={getDockerCmd()}
              language={'bash'}
              showLineNumbers={false}
              theme={dracula}
              codeBlock={false}
            />
          </VStack>
        </VStack>
      )}
      <Flex p={3} width={'100%'} align={'center'}>
        <Image src="./info.svg" width={'24px'} />
        <Text ml={2} fontWeight={'bold'} fontSize={'md'}>
          For more information check out docs{' '}
          <a href={'https://docs.api3.org/'} target={'_blank'} rel="noreferrer">
            here
          </a>
        </Text>
      </Flex>
    </VStack>
  );
};

export default Help;
