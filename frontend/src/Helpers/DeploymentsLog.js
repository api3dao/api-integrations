const DEPLOYMENT_STATUS_API_URL = 'https://integration.nodary.io/';

export async function getDeploymentStatus(airnodeAddress, setGrafanaLog) {
  let url = DEPLOYMENT_STATUS_API_URL;
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(`${url}deploymentStatus?airnode=${airnodeAddress}&app=airnode-feed`, options);
    const data = await response.json();

    setGrafanaLog(response.ok ? data : null);
  } catch (error) {
    setGrafanaLog(null);
  }
}
