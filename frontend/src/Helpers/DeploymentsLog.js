const DEPLOYMENT_STATUS_API_URL = 'https://integration.nodary.io/';

export async function getDeploymentStatus(airnodeAddress, setGrafanaLog) {
  let url = DEPLOYMENT_STATUS_API_URL;
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(`${url}deploymentStatus?airnode=${airnodeAddress}&app=pusher`, options);
    const data = await response.json();
    setGrafanaLog(data);
  } catch (error) {
    setGrafanaLog(null);
  }
}
