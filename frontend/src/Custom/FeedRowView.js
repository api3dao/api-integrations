import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { getPath, formatParameters } from '../Helpers/Utils';
import { callApiWithAdapter } from '../Helpers/AirnodeAdapter';
import CodeBlockView from './CodeBlockView';
import PathView from './PathView';
import TryButton from './TryButton';
import ParametersView from './ParametersView';

import { ApiIntegrationsContext } from '../Context';
import { useContext } from 'react';

const FeedRowView = ({ endpoint, feed, apiSpecifications, oisTitle, tryit = true }) => {
  const [postProcessResult, setPostProcessResult] = useState(null);
  const [error, setError] = useState(null);
  const [parametersError, setParametersError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { config } = useContext(ApiIntegrationsContext);

  const getParameters = () => {
    return formatParameters(
      endpoint.parameters,
      feed.preProcessingSpecificationsValue,
      endpoint.operation.method,
      setParametersError
    );
  };

  const callApi = () => {
    try {
      const payload = {
        config: config.config,
        aggregatedApiCall: {
          endpointName: endpoint.name,
          parameters: { name: feed.feed },
          oisTitle: oisTitle
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
    } catch (error) {
      setError(error);
    }
  };

  return (
    <VStack alignItems={'left'} spacing={8} p={2} width={'100%'}>
      <PathView
        method={endpoint.operation.method}
        path={getPath(endpoint.parameters, feed, apiSpecifications.servers, endpoint.operation.method, setError)}
      />
      <ParametersView parameters={getParameters()} parametersError={parametersError} />
      <CodeBlockView title={'Post Processing'} showLineNumbers={true} language={'javascript'} response={feed.code} />
      <TryButton action={() => callApi()} tryIt={tryit} isLoading={isLoading} />
      <CodeBlockView title={'Result'} response={postProcessResult} />
      <CodeBlockView title={'An Error Occured'} response={error} />
    </VStack>
  );
};

export default FeedRowView;
