import { VStack } from '@chakra-ui/react';
import Title from './Title';
import IntegrationRow from '../Components/IntegrationRow';

const AvailableDeployments = ({ integrations, apiData }) => {
  return integrations.map((integration, index) => (
    <IntegrationRow key={index} config={integration} apiData={apiData} />
  ));
};

/**
 * A component that displays a deployment category with a header, description, and available integrations.
 *
 * @param {Object} props - The component props.
 * @param {string} props.header - The header text to display.
 * @param {string} props.description - The description text to display.
 * @param {Array} props.integrations - An array of available integrations to display.
 * @param {Object} props.apiData - An object containing API data.
 * @returns {JSX.Element|null} The JSX element for the DeploymentCategory component, or null if there are no integrations.
 */
const DeploymentCategory = ({ header, integrations, apiData }) => {
  return integrations.length === 0 ? null : (
    <VStack width={'100%'} p={3} align={'left'}>
      <Title header={header} buttonVisibility={false} isLoading={false} p={0} />
      <AvailableDeployments integrations={integrations} apiData={apiData} />
    </VStack>
  );
};

export default DeploymentCategory;
