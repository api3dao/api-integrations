import { useState } from "react";
import { VStack, Flex } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import Title from "../Custom/Title";
import ApiProvider from "./ApiProvider";
import { checkFiles } from "../Helpers/FetchApis";
import Integrations from "./Integrations";
import { ApiIntegrationsContext } from "../Context";
import { useContext } from "react";

const Welcome = () => {

  const [provider, setProvider] = useState(null);

  const { config, setConfig, comparePair, setComparePair } = useContext(ApiIntegrationsContext);

  const configFiles = (ctx => {
    return checkFiles(ctx);
  })(require.context('../../../data/apis/', true, /\/[a-z0-9-]+-pusher.json/));

  const detach = () => {
    if (comparePair.left !== null && comparePair.right !== null) {
      setComparePair({ left: null, right: null });
      return;
    }

    if (config !== null) {
      setConfig(null);
      return;
    }

    setProvider(null);
  }

  return (
    <Flex spacing={4} height={"100vh"} overflow={"scroll"}>
      <VStack
        spacing={4}
        width={"100%"}
        alignItems={"center"}
        justifyItems={"stretch"}
      >

        {
          provider === null
            ?
            <VStack
              p={3}
              bgColor={COLORS.table}
              borderRadius={"sm"}
              boxShadow="md"
              spacing={4}
              width={"80vw"}
              maxWidth={"1000px"}
              alignItems={"left"}
              justifyItems={"center"}
            >
              <Title
                header={"API Providers"}
                buttonVisibility={false}
                isLoading={false}
              />
              <Flex justifyContent={"center"} direction={"row"} wrap={"wrap"}>
                {
                  configFiles.map((deployments, index) => (
                    <ApiProvider key={index} deployments={deployments} setProvider={setProvider} />
                  ))
                }
              </Flex>

            </VStack>

            :

            <VStack
              p={3}
              bgColor={COLORS.table}
              borderRadius={"sm"}
              boxShadow="md"
              spacing={4}
              width={"80vw"}
              maxWidth={"1000px"}
              alignItems={"left"}
              justifyItems={"center"}
            >
              <Title
                header={config == null ? provider.header.toUpperCase() : config.stage}
                buttonVisibility={true}
                buttonText={"< Back"}
                onClick={() => detach()}
                isLoading={false}
              />
              <Integrations integrations={provider.deployments} />
            </VStack>
        }




      </VStack>
    </Flex>
  );
};

export default Welcome;
