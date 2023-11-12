import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex, VStack, ColorModeScript } from '@chakra-ui/react';
import { useState } from 'react';
import Header from './Components/Header';
import Welcome from './Components/Welcome';

import theme from './theme';

import { ApiIntegrationsContext } from './Context';

function App() {
  const [config, setConfig] = useState(null);
  const [stage, setStage] = useState(null);
  const [comparePair, setComparePair] = useState({ left: null, right: null });
  const [grafanaLog, setGrafanaLog] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <ApiIntegrationsContext.Provider
        value={{ config, setConfig, stage, setStage, comparePair, setComparePair, grafanaLog, setGrafanaLog }}
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <HashRouter>
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
              <Routes>
                <Route path="/" element={<Welcome />} />
              </Routes>
            </VStack>
          </Flex>
        </HashRouter>
      </ApiIntegrationsContext.Provider>
    </ChakraProvider>
  );
}

export default App;
