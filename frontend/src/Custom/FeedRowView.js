import { Text, Flex, VStack, Button, Spacer } from '@chakra-ui/react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { formatCode } from '../Helpers/Utils';
import { useState } from 'react';
import { getPath } from '../Helpers/Utils';
import TableView from './TableView';
import { ColorRing } from 'react-loader-spinner';
import { callApiWithAdapter } from '../Helpers/AirnodeAdapter';

import { ApiIntegrationsContext } from '../Context';
import { useContext } from 'react';

const FeedRowView = ({ endpoint, feed, apiSpecifications, apiCredentials, tryit = true }) => {
  const [postProcessResult, setPostProcessResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { config } = useContext(ApiIntegrationsContext);

  const formatParameters = (parameters) => {
    try {
      const formattedParameters = [];
      Object.keys(parameters).forEach((key) => {
        const parameter = parameters[key];
        if (parameter.name === 'path') return;
        const data =
          parameter.name === 'path'
            ? feed.preProcessingSpecificationsValue.path
            : feed.preProcessingSpecificationsValue.parameters[parameter.name];

        if (data === undefined) {
          return;
        }

        formattedParameters.push({
          name: parameter.name,
          type: parameter.operationParameter == null ? 'string' : parameter.operationParameter.in,
          value: data,
          required: parameter.required ? 'Yes' : 'No'
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

  const callApi = () => {
    const payload = {
      config: config.config,
      aggregatedApiCall: {
        endpointName: endpoint.name,
        parameters: { name: feed.feed },
        oisTitle: apiCredentials.oisTitle
      }
    };
    setIsLoading(true);
    callApiWithAdapter(payload)
      .then((res) => {
        setIsLoading(false);
        setError(null);
        setPostProcessResult(res);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const getColor = (method, darker) => {
    if (method === 'GET') return darker ? 'blue.300' : 'blue.200';
    if (method === 'POST') return darker ? 'green.300' : 'green.200';
    return 'yellow.300';
  };

  return (
    <VStack alignItems={'left'} spacing={4} p={2} width={'100%'}>
      <Text fontSize={'md'} fontWeight={'bold'}>
        HTTP Request
      </Text>
      <Flex maxW={'100%'}>
        <Text
          bgColor={getColor(endpoint.operation.method.toUpperCase(), true)}
          p={2}
          fontSize={'sm'}
          fontWeight={'bold'}
        >
          {endpoint.operation.method.toUpperCase()}
        </Text>
        <Text bgColor={getColor(endpoint.operation.method.toUpperCase(), false)} p={2} fontSize={'sm'} noOfLines={0}>
          {getPath(endpoint.parameters, feed, apiSpecifications.servers, setError)}
        </Text>
        <Spacer />
      </Flex>

      {formatParameters(endpoint.parameters).length === 0 ? null : (
        <>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Parameters
          </Text>
          {error !== null ? (
            'error'
          ) : (
            <TableView
              parameters={formatParameters(endpoint.parameters)}
              headers={[
                { key: 'name', value: 'Name' },
                { key: 'type', value: 'Type' },
                { key: 'value', value: 'Value' },
                { key: 'required', value: 'Required' }
              ]}
            />
          )}
        </>
      )}
      <Text fontSize={'md'} fontWeight={'bold'}>
        Post Processing
      </Text>
      <CopyBlock
        text={formatCode(feed.code)}
        language={'javascript'}
        showLineNumbers={true}
        theme={dracula}
        codeBlock={true}
      />

      <VStack alignItems={'left'} width={'100%'}>
        {!tryit ? null : (
          <Flex>
            <Button
              colorScheme={'orange'}
              p={2}
              fontSize={'sm'}
              h={'50px'}
              w={'100px'}
              onClick={() => {
                callApi();
              }}
            >
              Try it out
            </Button>
            <Spacer />
            <ColorRing height="50px" width="50px" radius="9" color="green" ariaLabel="loading" visible={isLoading} />
          </Flex>
        )}
      </VStack>
      {postProcessResult == null ? null : (
        <VStack alignItems={'left'} width={'100%'}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Result
          </Text>
          <CopyBlock
            text={formatCode(postProcessResult)}
            language={'json'}
            showLineNumbers={true}
            theme={dracula}
            codeBlock={true}
          />
        </VStack>
      )}
      {error == null ? null : (
        <VStack alignItems={'left'} width={'100%'}>
          <Text fontSize={'md'} fontWeight={'bold'}>
            Error
          </Text>
          <CopyBlock
            text={formatCode(error)}
            language={'json'}
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
