import { useState } from "react";
import { VStack, Flex } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import Title from "../Custom/Title";
import ApiProvider from "./ApiProvider";
import { checkFiles } from "../Helpers/FetchApis";
import Integrations from "./Integrations";

const Welcome = () => {

  const [deployments, setDeployments] = useState(null);

  const configFiles = (ctx => {
    return checkFiles(ctx);
  })(require.context('../../../data/apis/', true, /\/[a-z0-9]+-pusher.json/));

  return (
    <Flex spacing={4} height={"100vh"} overflow={"scroll"}>
      <VStack
        spacing={4}
        width={"100%"}
        alignItems={"center"}
        justifyItems={"stretch"}
      >

        {
          deployments === null
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
                    <ApiProvider key={index} deployments={deployments} setDeployments={setDeployments} />
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
                header={"Deployments"}
                buttonVisibility={true}
                buttonText={"X"}
                onClick={() => setDeployments(null)}
                isLoading={false}
              />
              <Integrations integrations={deployments} />

            </VStack>
        }




      </VStack>
    </Flex>
  );
};

export default Welcome;
