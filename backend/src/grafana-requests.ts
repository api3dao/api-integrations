import axios from 'axios';

export const createToken = (airnode: string) =>
  axios.post(
    'https://www.grafana.com/api/v1/tokens',
    {
      accessPolicyId: process.env.GF_CLOUD_ACCESS_POLICY_ID,
      name: airnode.toLowerCase(), // TODO: Change this with partner name
      displayName: airnode
    },
    {
      params: { region: process.env.GF_CLOUD_REGION },
      headers: { Authorization: `Bearer ${process.env.GF_CLOUD_TOKEN}` }
    }
  );

export const deleteToken = (tokenId: string) =>
  axios.delete('https://www.grafana.com/api/v1/tokens', {
    params: { region: process.env.GF_CLOUD_REGION, tokenId },
    headers: { Authorization: `Bearer ${process.env.GF_CLOUD_TOKEN}` }
  });

export const queryLogs = (app: string, airnode: string, textToFind: string, limit: string, since: string) =>
  axios.get(`https://${process.env.GF_LOKI_ENDPOINT}/loki/api/v1/query_range`, {
    params: { limit, since, query: `{airnode="${airnode}",app="${app}"} |= \`${textToFind}\`` },
    auth: { username: process.env.GF_LOKI_USER!, password: process.env.GF_CLOUD_TOKEN! }
  });
