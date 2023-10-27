import ExpandableView from './ExpandableView';
import IntegrationRow from '../Components/IntegrationRow';

const DeploymentCategory = ({ apiProvider, category, header, integrations }) => {
  return (
    integrations.length === 0 ? null :
      <ExpandableView
        header={header}
        defaultState={true}
        view={
          integrations.map((integration, index) => <IntegrationRow key={index} apiProvider={apiProvider} category={category} integration={integration} />)
        }
      />
  );
};

export default DeploymentCategory;
