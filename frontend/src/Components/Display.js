import { VStack, Flex, Text, Box, Input, Spacer } from '@chakra-ui/react';
import Endpoint from './Endpoint';
import InputRow from '../Custom/InputRow';
import { COLORS } from '../data/constants';
import Title from '../Custom/Title';
import ExpandableView from '../Custom/ExpandableView';
import DeployOptions from './DeployOptions';

import { ApiIntegrationsContext } from '../Context';
import { useContext } from 'react';

const FeedsView = ({ ois }) => {
  const getSecuritySchemeValue = (i) => {
    return 'ERROR FINDING SECURITY SCHEME VALUE';
  };

  return (
    <ExpandableView
      status={5}
      view={ois.endpoints
        .filter((endpoint) => endpoint.name === 'feed')
        .map((endpoint, index) => (
          <VStack key={index} alignItems={'left'} width={'100%'}>
            <Endpoint
              endpoint={endpoint}
              apiSpecifications={ois.apiSpecifications}
              oisTitle={ois.title}
              apiCredentials={getSecuritySchemeValue(index)}
            />
          </VStack>
        ))}
      header={'Feeds'}
    ></ExpandableView>
  );
};

const SecretsView = ({ index }) => {
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

  return (
    <ExpandableView
      status={5}
      view={
        <VStack alignItems={'left'} p={2} border={'1px'} borderColor={COLORS.main} width={'100%'}>
          <VStack width={'100%'} direction="row" align="left">
            <Text fontWeight={'bold'} fontSize={'md'}>
              {'Security Scheme Value'}
            </Text>
            <Box p="2" width={'100%'} borderRadius={'10'} bgColor={COLORS.table} alignItems={'center'}>
              <Flex className="box">
                <Input
                  type="text"
                  value={config.config.apiCredentials[index].securitySchemeValue}
                  onChange={(e) => setSecuritySchemeValues(index, e.target.value)}
                  size="md"
                />
                <Spacer />
              </Flex>
            </Box>
          </VStack>
        </VStack>
      }
      header={'Secrets'}
    ></ExpandableView>
  );
};

const OisView = () => {
  const { config } = useContext(ApiIntegrationsContext);

  return config.config.ois.map((ois, index) => (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      <Title header={ois.title} buttonVisibility={false} isLoading={false} />
      <VStack bgColor={COLORS.table} spacing={4} alignItems={'left'}>
        <SecretsView index={index} />
        <FeedsView ois={ois} />
      </VStack>
    </VStack>
  ));
};

const Display = ({ apiData }) => {
  const { config, setConfig } = useContext(ApiIntegrationsContext);

  const setAirnodeWalletMnemonic = (value) => {
    config.config.airnodeWalletMnemonic = value;
    setConfig({ ...config });
  };

  return config === null ? null : (
    <VStack p={1} spacing={4} alignItems={'left'}>
      <Title header={'Airnode Wallet Mnemonic'} isLoading={false} buttonVisibility={false} />
      <VStack alignItems={'left'} p={2} border={'1px'} borderColor={COLORS.main} width={'100%'}>
        <InputRow
          text={config.config.airnodeWalletMnemonic}
          title={'Enter wallet mnemonic:'}
          setText={setAirnodeWalletMnemonic}
        />
      </VStack>
      <OisView />
      <DeployOptions apiData={apiData} />
      <VStack p={3} height={'50px'} align={'left'} />
    </VStack>
  );
};

export default Display;
