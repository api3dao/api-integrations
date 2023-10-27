import ExpandableView from './ExpandableView';
import IntegrationRow from '../Components/IntegrationRow';

const DeploymentCategory = ({ category, header, integrations }) => {
  return (
    integrations.length === 0 ? null :
      <ExpandableView
        header={header}
        defaultState={true}
        view={
          integrations.map((integration, index) => <IntegrationRow key={index} category={category} integration={integration} />)
        }
      />
  );
};

export default DeploymentCategory;
