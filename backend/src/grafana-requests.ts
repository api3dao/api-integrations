import axios from 'axios';

export const createToken = (airnode: string) =>
  axios.post(
    'http://www.grafana.com/api/v1/tokens',
    {
      accessPolicyId: process.env.GF_ACCESS_POLICY_ID,
      name: airnode.toLowerCase(), // TODO: Change this with partner name
      displayName: airnode
    },
    {
      params: { region: process.env.GF_REGION },
      headers: { Authorization: `Bearer ${process.env.GF_ADMIN_TOKEN}` }
    }
  );
