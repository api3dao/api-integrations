'use client';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';

import { ColorModeScript } from '@chakra-ui/react';

import { ChakraProvider, Flex, VStack } from '@chakra-ui/react';
import theme from './theme';

import ParticlesBg from './Custom/ParticlesBg';
import { useState } from 'react';

import { ApiIntegrationsContext } from './Context';

function App() {
  const [config, setConfig] = useState(null);
  const [stage, setStage] = useState(null);
  const [comparePair, setComparePair] = useState({ left: null, right: null });

  return (
    <ChakraProvider theme={theme}>
      <ApiIntegrationsContext.Provider value={{ config, setConfig, stage, setStage, comparePair, setComparePair }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        <Flex
          h="calc(100vh - 90px)"
          bgColor={'transparent'}
          spacing={0}
          p={2}
          alignItems={'stretch'}
          flexDirection={'row'}
        >
          <VStack overflow={'scroll'} width={'100%'} alignItems={'left'}>
            <ParticlesBg />
            <Welcome />
          </VStack>
        </Flex>
      </ApiIntegrationsContext.Provider>
    </ChakraProvider>
  );
}

export default App;
