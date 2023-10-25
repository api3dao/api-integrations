import { VStack, Flex, Text, Stack } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import Display from "./Display";
import CompareEndpoints from "./CompareEndpoints";
import { useContext } from "react";
import { ApiIntegrationsContext } from "../Context"
import DeploymentCategory from "../Custom/DeploymentCategory";
import CompareId from "../Custom/CompareId";

const Integrations = ({ integrations }) => {

  const { config, comparePair, setComparePair } = useContext(ApiIntegrationsContext);

  return (
    <Flex spacing={4} overflow={"scroll"}>
      <VStack
        spacing={4}
        width={"100%"}
        alignItems={"center"}
        justifyItems={"stretch"}
      >
        <VStack
          p={1}
          bgColor={COLORS.canvas}
          spacing={4}
          width={"100%"}

          alignItems={"left"}
          justifyItems={"center"}
        >
          {config === null ?
            <>
              {
                comparePair.left === null && comparePair.right === null ? null :
                  <Stack direction={"row"} justifyContent={"center"}>
                    <CompareId deleteActive={comparePair.left != null} header={"New"} onClick={() => { setComparePair({ left: null, right: comparePair.right }) }} text={comparePair.left == null ? "Click on a provider to compare it with another" : comparePair.left.stage} />
                    <Flex alignItems={"center"} justifyItems={"center"} >
                      <Text align={"center"} fontSize={"sm"} fontWeight={"bold"} color={"gray.500"} >VS</Text>
                    </Flex>
                    <CompareId deleteActive={comparePair.right != null} header={"Old"} onClick={() => { setComparePair({ left: comparePair.left, right: null }) }} text={comparePair.right == null ? "Click on a provider to compare it with another" : comparePair.right.stage} />
                  </Stack>
              }
              {
                comparePair.left !== null && comparePair.right !== null ?
                  <CompareEndpoints oldOis={comparePair.left.ois} newOis={comparePair.right.ois} />
                  :
                  <>
                    <DeploymentCategory header={"Active Deployments"} integrations={integrations.activeDeployment} />
                    <DeploymentCategory header={"Candidate Deployments"} integrations={integrations.candidateDeployment} />
                  </>
              }
            </>
            :
            <Display configData={config} />}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Integrations;
