import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import ParametersView from './ParametersView';
import CodeBlockView from './CodeBlockView';
import PathView from './PathView';
import { getPath, formatParameters } from '../Helpers/Utils';

const FeedRowView = ({ endpoint, feed, apiSpecifications }) => {
  const [error, setError] = useState(null);
  const [parametersError, setParametersError] = useState(null);

  const getParameters = () => {
    return formatParameters(
      endpoint.parameters,
      feed.preProcessingSpecificationsValue,
      endpoint.operation.method,
      setParametersError
    );
  };

  return (
    <VStack alignItems={'left'} spacing={8} p={2} width={'100%'}>
      <PathView
        method={endpoint.operation.method}
        path={getPath(endpoint.parameters, feed, apiSpecifications.servers, endpoint.operation.method, setError)}
      />
      <ParametersView parameters={getParameters()} parametersError={parametersError} />
      <CodeBlockView title={'Post Processing'} showLineNumbers={true} language={'javascript'} response={feed.code} />
      <CodeBlockView title={error ? 'An Error Occured' : 'Result'} response={error} />
    </VStack>
  );
};

export default FeedRowView;
