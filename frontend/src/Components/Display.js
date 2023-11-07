import { VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import Endpoint from './Endpoint';
import DeployOptions from './DeployOptions';
import PasteRow from '../Custom/PasteRow';
import { COLORS } from '../data/constants';
import Title from '../Custom/Title';
import ExpandableView from '../Custom/ExpandableView';
import UnsupportedFeedsView from '../Custom/UnsupportedFeedsView';

import { ApiIntegrationsContext } from '../Context';

const FeedsView = ({ ois }) => {
  return (
    <ExpandableView
      status={5}
      view={ois.endpoints
        .filter((endpoint) => endpoint.name === 'feed')
        .map((endpoint, index) => (
          <VStack key={index} alignItems={'left'} width={'100%'}>
            <Endpoint endpoint={endpoint} apiSpecifications={ois.apiSpecifications} oisTitle={ois.title} />
          </VStack>
        ))}
      header={'Feeds'}
    ></ExpandableView>
  );
};

const SecretsView = ({ index, text, setText }) => {
  const setSecuritySchemeValue = (value) => {
    setText(index, value);
  };

  return (
    <ExpandableView
      status={5}
      view={
        <VStack alignItems={'left'} p={2} border={'1px'} borderColor={COLORS.main} width={'100%'}>
          <PasteRow text={text} title={'Security Scheme Value:'} setText={setSecuritySchemeValue} />
        </VStack>
      }
      header={'Secrets'}
    ></ExpandableView>
  );
};

const OisView = ({ apiData }) => {
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

  return config.config.ois.map((ois, index) => (
    <VStack key={index} alignItems={'left'} width={'100%'}>
      <Title header={ois.title} buttonVisibility={false} isLoading={false} />
      <VStack bgColor={COLORS.table} spacing={4} alignItems={'left'}>
        <UnsupportedFeedsView apiData={apiData} ois={ois} />
        <SecretsView index={index} text={getSecuritySchemeValue(index)} setText={setSecuritySchemeValues} />
        <FeedsView ois={ois} />
      </VStack>
    </VStack>
  ));
};

const Display = ({ apiData }) => {
  const { config, setConfig } = useContext(ApiIntegrationsContext);

  const setAirnodeWalletMnemonic = (value) => {
    config.config.nodeSettings.airnodeWalletMnemonic = value;
    setConfig({ ...config });
  };

  return config === null ? null : (
    <VStack p={1} spacing={4} alignItems={'left'}>
      <Title header={'Airnode Wallet Mnemonic'} isLoading={false} buttonVisibility={false} />
      <VStack alignItems={'left'} p={2} border={'1px'} borderColor={COLORS.main} width={'100%'}>
        <PasteRow
          text={config.config.nodeSettings.airnodeWalletMnemonic}
          title={'Enter wallet mnemonic:'}
          setText={setAirnodeWalletMnemonic}
        />
      </VStack>
      <OisView apiData={apiData} />
      <DeployOptions apiData={apiData} />
      <VStack p={3} height={'50px'} align={'left'} />
    </VStack>
  );
};

export default Display;
