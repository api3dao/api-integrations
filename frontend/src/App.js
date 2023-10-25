import "./App.css";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";

import { HashRouter, Routes, Route } from "react-router-dom";

import { ColorModeScript } from "@chakra-ui/react";

import { ChakraProvider, Flex, VStack } from "@chakra-ui/react";
import theme from "./theme";

import ParticlesBg from "./Custom/ParticlesBg";
import { useState } from "react";

import { ApiIntegrationsContext } from "./Context";

function App() {

  const [config, setConfig] = useState(null);
  const [stage, setStage] = useState(null);
  const [comparePair, setComparePair] = useState({ left: null, right: null });

  return (
    <ChakraProvider theme={theme}>
      <ApiIntegrationsContext.Provider value={{ config, setConfig, stage, setStage, comparePair, setComparePair }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <HashRouter>
          <Header />
          <Flex
            h="calc(100vh - 90px)"
            bgColor={"transparent"}
            spacing={0}
            p={2}
            alignItems={"stretch"}
            flexDirection={"row"}
          >
            <VStack overflow={"scroll"} width={"100%"} alignItems={"left"}>
              <ParticlesBg />

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
