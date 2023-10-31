import ExpandableView from './ExpandableView';
import IntegrationRow from '../Components/IntegrationRow';

const DeploymentCategory = ({ header, integrations, apiData }) => {
  return integrations.length === 0 ? null : (
    <ExpandableView
      header={header}
      defaultState={true}
      view={integrations.map((integration, index) => (
        <IntegrationRow key={index} config={integration} apiData={apiData} />
      ))}
    />
  );
};

export default DeploymentCategory;
