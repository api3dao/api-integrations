import { VStack, Flex } from "@chakra-ui/react";
import { COLORS } from "../data/constants";
import IntegrationRow from "./IntegrationRow";
import Display from "./Display";
import { useContext } from "react";
import ExpandableView from "../Custom/ExpandableView";
import UploadConfig from "./UploadConfig";
import { ApiIntegrationsContext } from "../Context";

const Integrations = ({ integrations }) => {

  const { config, setConfig } = useContext(ApiIntegrationsContext);

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
          {
            integrations == null ?
              <>
                <UploadConfig setConfig={setConfig} />
                <Display configData={config} />
              </>
              :
              <>
                {config === null
                  ?
                  <>
                    <ExpandableView
                      header={"Active Deployments"}
                      defaultState={true}
                      view={
                        integrations.activeDeployment.length === null ? null : (
                          integrations.activeDeployment.map((integration, index) => (
                            <IntegrationRow key={index} integration={integration} />
                          ))
                        )
                      }
                    />

                    <ExpandableView
                      header={"Candidate Deployments"}
                      defaultState={true}
                      view={
                        integrations.candidateDeployment.length === null ? null : (
                          integrations.candidateDeployment.map((integration, index) => (
                            <IntegrationRow key={index} integration={integration} />
                          ))
                        )

                      }
                    />
                  </>

                  : <Display configData={config} />}
              </>


          }




        </VStack>
      </VStack>
    </Flex>
  );
};

export default Integrations;
