import { useEffect, useState } from 'react';
import { VStack, Flex, Text, Box, Input, Spacer } from '@chakra-ui/react';
import Endpoint from './Endpoint';
import InputRow from '../Custom/InputRow';
import { COLORS } from '../data/constants';
import Title from '../Custom/Title';
import ExpandableView from '../Custom/ExpandableView';
import DeployOptions from './DeployOptions';

const Hero = ({ configData }) => {
  const [ois, setOis] = useState([]);
  const [SECURITY_SCHEME_VALUES, setSecuritySchemeValue] = useState([]);
  const [AIRNODE_WALLET_MNEMONIC, setAirnodeWalletMnemonic] = useState('');

  useEffect(() => {
    setOis([]);

    if (configData == null) return;
    if (configData.config.ois === undefined) return;
    if (configData.config.ois.length === 0) return;

    if (configData.config.airnodeWalletMnemonic === null) return;

    setOis(configData.config.ois);
    setAirnodeWalletMnemonic(String(configData.config.airnodeWalletMnemonic));
    setSecuritySchemeValue(configData.config.apiCredentials);
  }, [configData]);

  const setSecuritySchemeValues = (i, value) => {
    const newState = SECURITY_SCHEME_VALUES.map((obj, index) => {
      if (index === i) {
        return { ...obj, securitySchemeValue: value };
      }

      return obj;
    });
    setSecuritySchemeValue(newState);
  };

  return configData === null ? null : (
    <VStack p={1} spacing={4} alignItems={'left'}>
      <Title header={'Airnode Wallet Mnemonic'} isLoading={false} buttonVisibility={false} />
      <VStack alignItems={'left'} p={2} border={'1px'} borderColor={COLORS.main} width={'100%'}>
        <InputRow text={AIRNODE_WALLET_MNEMONIC} title={'Enter wallet mnemonic:'} setText={setAirnodeWalletMnemonic} />
      </VStack>
      {ois.map((ois, index) => (
        <VStack key={index} alignItems={'left'} width={'100%'}>
          <Title header={ois.title} buttonVisibility={false} isLoading={false} />
          <VStack bgColor={COLORS.table} spacing={4} alignItems={'left'}>
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
                          value={SECURITY_SCHEME_VALUES[index].securitySchemeValue}
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
                    />
                  </VStack>
                ))}
              header={'Feeds'}
            ></ExpandableView>
          </VStack>
        </VStack>
      ))}
      <DeployOptions
        configData={configData}
        mnemonic={AIRNODE_WALLET_MNEMONIC}
        schemeValues={SECURITY_SCHEME_VALUES}
        ois={ois}
      />
      <VStack p={3} height={'50px'} align={'left'} />
    </VStack>
  );
};

export default Hero;
