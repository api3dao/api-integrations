import { Text, Flex, VStack, Button, Spacer } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { formatCode } from "../Helpers/Utils";
import { useState } from "react";
import {
  getPath,
  getApiCallParameters,
  pathFromPrePreProcessing,
  getApiKey,
} from "../Helpers/Utils";
import { postProcessing, preProcessing, getAPIResponse } from "../Helpers/PostProcessing";
import TableView from "./TableView";
import { ColorRing } from "react-loader-spinner";

const FeedRowView = ({ endpoint, feed, apiSpecifications, apiCredentials, tryit = true }) => {
  const [postProcessResult, setPostProcessResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formatParameters = (parameters) => {
    try {
      const apiCallParameters = getApiCallParameters(
        feed.preProcessingSpecificationsValue,
        setError
      );

      if (apiCallParameters === null) return [];

      const formattedParameters = [];
      Object.keys(parameters).forEach((key) => {
        const parameter = parameters[key];
        if (parameter.name === "path") return;
        const data =
          parameter.name === "path"
            ? apiCallParameters.path
            : apiCallParameters.parameters[parameter.name];

        if (data === undefined) {
          return;
        }

        formattedParameters.push({
          name: parameter.name,
          type:
            parameter.operationParameter == null
              ? "string"
              : parameter.operationParameter.in,
          value: data,
          required: parameter.required ? "Yes" : "No",
        });
      });

      formattedParameters.sort((a, b) => {
        if (b.value === undefined && a.value !== undefined) return -1;
        return 0;
      });

      return formattedParameters;
    } catch (error) {
      setError(error);
    }
  };

  const callApi = (result) => {
    if (apiSpecifications == null) return;
    const url = pathFromPrePreProcessing(result, apiSpecifications.servers);
    const apiKey = getApiKey(apiCredentials, apiSpecifications.components.securitySchemes);

    getAPIResponse(url, endpoint.operation.method, apiKey).then((res) => {
      setIsLoading(false);
      postProcessing(
        res,
        { name: feed.feed },
        endpoint,
        setPostProcessResult
      );
    }
    );
  };

  const preProcess = () => {
    setIsLoading(true);
    setPostProcessResult(null);
    preProcessing(endpoint, { name: feed.feed }, callApi);
  };

  const getColor = (method, darker) => {
    if (method === "GET") return darker ? "blue.300" : "blue.200";
    if (method === "POST") return darker ? "green.300" : "green.200";
    return "yellow.300";
  };

  return (
    <VStack alignItems={"left"} spacing={4} p={2} width={"100%"}>
      <Text fontSize={"md"} fontWeight={"bold"}>
        HTTP Request
      </Text>
      <Flex>
        <Text
          bgColor={getColor(endpoint.operation.method.toUpperCase(), true)}
          p={2}
          fontSize={"sm"}
          fontWeight={"bold"}
        >
          {endpoint.operation.method.toUpperCase()}
        </Text>
        <Text
          bgColor={getColor(endpoint.operation.method.toUpperCase(), false)}
          p={2}
          fontSize={"sm"}
        >
          {error !== null ? "error" : getPath(feed, apiSpecifications.servers, setError)}
        </Text>
        <Spacer />
      </Flex>

      {
        formatParameters(endpoint.parameters).length === 0 ? null :
          <>
            <Text fontSize={"md"} fontWeight={"bold"}>
              Parameters
            </Text>
            {error !== null ? (
              "error"
            ) : (
              <TableView
                parameters={formatParameters(endpoint.parameters)}
                headers={[
                  { key: "name", value: "Name" },
                  { key: "type", value: "Type" },
                  { key: "value", value: "Value" },
                  { key: "required", value: "Required" },
                ]}
              />
            )}
          </>
      }
      <Text fontSize={"md"} fontWeight={"bold"}>
        Post Processing
      </Text>
      <CopyBlock
        text={formatCode(feed.code)}
        language={"javascript"}
        showLineNumbers={true}
        theme={dracula}
        codeBlock={true}
      />

      <VStack alignItems={"left"} width={"100%"}>
        {!tryit ? null : (
          <Flex>
            <Button
              colorScheme={"orange"}
              p={2}
              fontSize={"sm"}
              h={"50px"}
              w={"100px"}
              onClick={() => {
                preProcess();
              }}
            >
              Try it out
            </Button>
            <Spacer />
            <ColorRing
              height="50px"
              width="50px"
              radius="9"
              color="green"
              ariaLabel="loading"
              visible={isLoading}
            />
          </Flex>

        )}
      </VStack>
      {postProcessResult == null ? null : (
        <VStack alignItems={"left"} width={"100%"}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Result
          </Text>
          <CopyBlock
            text={formatCode(postProcessResult)}
            language={"json"}
            showLineNumbers={true}
            theme={dracula}
            codeBlock={true}
          />
        </VStack>
      )}
      {error == null ? null : (
        <VStack alignItems={"left"} width={"100%"}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Error
          </Text>
          <CopyBlock
            text={formatCode(error)}
            language={"json"}
            showLineNumbers={false}
            theme={dracula}
            codeBlock={true}
          />
        </VStack>
      )}
    </VStack>
  );
};

export default FeedRowView;
