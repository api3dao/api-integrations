import { Box, Flex, VStack } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import Endpoint from './Endpoint';
import DeployOptions from './DeployOptions';
import PasteRow from '../Custom/PasteRow';
import { COLORS, CONSTANTS } from '../data/constants';
import Title from '../Custom/Title';
import UnsupportedFeedsView from '../Custom/UnsupportedFeedsView';
import RadioButton from '../Custom/RadioButton';
import { ApiIntegrationsContext } from '../Context';

const FeedsView = ({ ois }) => {
  return (
    ois.endpoints
      .filter((endpoint) => endpoint.name === 'feed')
      .map((endpoint, index) => (
        <VStack key={index} alignItems={'left'} width={'100%'}>
          <Endpoint endpoint={endpoint} apiSpecifications={ois.apiSpecifications} oisTitle={ois.title} />
        </VStack>
      ))
  );
};

const SecretsView = ({ index, header, text, setText }) => {
  const setSecuritySchemeValue = (value) => {
    setText(index, value);
  };

  return (
    <PasteRow text={text} title={`${header} API Key:`} setText={setSecuritySchemeValue} />
  );
};

const OisView = ({ apiData }) => {
  const { config } = useContext(ApiIntegrationsContext);

  return config.config.ois.map((ois, index) => (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      <Title header={ois.title} buttonVisibility={false} isLoading={false} />
      <VStack bgColor={COLORS.table} spacing={4} alignItems={'left'}>
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
      <Box onClick={() => setViewMode("feeds")}>
        <RadioButton bgColor={getColor("feeds")} icon={`./test.svg`} description={'Test Feeds'} />
      </Box>
      <Box onClick={() => setViewMode("deploy")}>
        <RadioButton bgColor={getColor("deploy")} icon={`./deploy.svg`} description={'Deploy'} />
      </Box>
    </Flex>
  );
};

const DeployView = ({ apiData }) => {
  const { config, setConfig } = useContext(ApiIntegrationsContext);

  const setSecuritySchemeValues = (i, value) => {
    const newApiCredentials = config.config.apiCredentials.map((obj, index) => {
      if (index === i) {
        return { ...obj, securitySchemeValue: value };
      }

      return obj;
    });
    config.config = { ...config.config, apiCredentials: newApiCredentials };
    setConfig({ ...config });
  };

  const getSecuritySchemeValue = (i) => {
    return config.config.apiCredentials[i].securitySchemeValue;
  };

  return (
    <VStack alignItems={'left'} width={'100%'}>
      <Title header={'Authorization'} isLoading={false} buttonVisibility={false} />
      <VStack p={2} spacing={5} alignItems={'left'} width={'100%'}>
        <PasteRow
          text={""}
          title={'Log API:'}
          setText={() => { }}
        />
        {
          config.config.ois.map((ois, index) => (
            <VStack key={index} alignItems={'left'} width={'100%'}>
              <SecretsView index={index} header={ois.title} text={getSecuritySchemeValue(index)} setText={setSecuritySchemeValues} />
            </VStack>
          ))
        }
        <DeployOptions apiData={apiData} />

      </VStack>
    </VStack>
  );
};

const ContentView = ({ viewMode, apiData }) => {
  console.log(viewMode);
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
