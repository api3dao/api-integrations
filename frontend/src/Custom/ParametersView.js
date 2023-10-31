import { Text, VStack } from '@chakra-ui/react';
import CodeBlockView from './CodeBlockView';
import TableView from './TableView';

const ParametersView = ({ parameters, parametersError }) => {
  return parameters.length === 0 ? null : (
    <VStack alignItems={'left'} width={'100%'}>
      <Text fontSize={'md'} fontWeight={'bold'}>
        Parameters
      </Text>
      <CodeBlockView title={'Parameters Error'} response={parametersError} />
      <TableView
        parameters={parameters}
        headers={[
          { key: 'name', value: 'Name' },
          { key: 'type', value: 'Type' },
          { key: 'value', value: 'Value' },
          { key: 'required', value: 'Required' }
        ]}
      />
    </VStack>
  );
};

export default ParametersView;
