import { Flex, VStack } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import Endpoint from './Endpoint';
import DeployOptions from './DeployOptions';
import { COLORS, CONSTANTS } from '../data/constants';
import Title from '../Custom/Title';
import UnsupportedFeedsView from '../Custom/UnsupportedFeedsView';
import RadioButton from '../Custom/RadioButton';
import { ApiIntegrationsContext } from '../Context';
import BatchedOisInfo from '../Custom/BatchedOisInfo';

const FeedsView = ({ ois }) => {
  return ois.endpoints
    .filter((endpoint) => endpoint.name === 'feed')
    .map((endpoint, index) => (
      <VStack key={index} alignItems={'left'} width={'100%'}>
        <Endpoint endpoint={endpoint} apiSpecifications={ois.apiSpecifications} oisTitle={ois.title} />
      </VStack>
    ));
};

const OisView = ({ apiData }) => {
  const { config } = useContext(ApiIntegrationsContext);

  return config.config.ois.map((ois, index) => (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      <Title header={ois.title} buttonVisibility={false} isLoading={false} />
      <VStack bgColor={COLORS.table} spacing={4} alignItems={'left'}>
        <BatchedOisInfo apiData={apiData} oisTitle={ois.title} />
        <UnsupportedFeedsView apiData={apiData} ois={ois} />
        <FeedsView ois={ois} />
      </VStack>
    </VStack>
  ));
};

const NavigationView = ({ viewMode, setViewMode }) => {
  const getColor = (mode) => {
    return viewMode === mode ? COLORS.select : COLORS.table;
  };
  return (
    <Flex width={'100%'} gap={3} alignItems={'center'}>
      <RadioButton
        onClick={() => setViewMode('feeds')}
        bgColor={getColor('feeds')}
        icon={`./test.svg`}
        description={'Feeds'}
      />
      <RadioButton
        onClick={() => setViewMode('deploy')}
        bgColor={getColor('deploy')}
        icon={`./deploy.svg`}
        description={'Deploy'}
      />
    </Flex>
  );
};

const DeployView = ({ apiData }) => {
  return (
    <VStack alignItems={'left'} width={'100%'}>
      <DeployOptions apiData={apiData} />
    </VStack>
  );
};

const ContentView = ({ viewMode, apiData }) => {
  switch (viewMode) {
    case CONSTANTS.DEPLOY_VIEW:
      return <DeployView apiData={apiData} />;
    case CONSTANTS.FEEDS_VIEW:
      return <OisView apiData={apiData} />;
    default:
      return null;
  }
};

const Display = ({ apiData }) => {
  const { config } = useContext(ApiIntegrationsContext);
  const [viewMode, setViewMode] = useState(null);

  return config === null ? null : (
    <VStack p={1} spacing={4} alignItems={'left'} width={'100%'}>
      <NavigationView viewMode={viewMode} setViewMode={setViewMode} />
      <ContentView viewMode={viewMode} apiData={apiData} />
    </VStack>
  );
};

export default Display;
