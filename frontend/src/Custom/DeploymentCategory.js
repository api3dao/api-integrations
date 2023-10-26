import ExpandableView from './ExpandableView';
import IntegrationRow from '../Components/IntegrationRow';

const DeploymentCategory = ({ header, integrations }) => {
  return (
    <ExpandableView
      header={header}
      defaultState={true}
      view={
        integrations.length === 0 ? (
          <IntegrationRow integration={null} />
        ) : (
          integrations.map((integration, index) => <IntegrationRow key={index} integration={integration} />)
        )
      }
    />
  );
};

export default DeploymentCategory;
