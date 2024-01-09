# API integrations backend

This repository contains the backend API which is responsible for managing access tokens, checking the heartbeats of
deployments, and performing other operational tasks. The system manages tokens two type of tokens: Grafana Loki access
tokens and signed API access tokens. The former facilitates the authorization process for partner providers, empowering
them to send `airnode-feed` logs. Meanwhile, the latter type of tokens is used to authorize partner providers to send
signed data to `signed-api` deployed by Nodary and API3. Beyond token management, the system intelligently processes the
heartbeat logs from 'airnode-feed' deployments, offering a comprehensive mechanism to assess the status of these
deployments.

## Getting started

### Configuration

1. Copy `.env` from the `example.env` file.
2. Open the `.env` file and update the environment variables:
   - `HTTP_API_ID`: ID of the AWS HTTP API Gateway
   - `API_KEY_LIST`: List of API keys that are allowed to use the API in the format `user1:key1,user2:key2`
   - `GF_CLOUD_REGION`: Region of the utilizied Grafana Cloud instance
   - `GF_CLOUD_TOKEN`: Grafana Cloud token that is enabled to generate token and read logs
   - `GF_CLOUD_ACCESS_POLICY_ID`: Policy to be used while generating token, expected to be authorized to write logs only
   - `GF_LOKI_USER`: Grafana Loki user able to use endpoint `GF_LOKI_ENDPOINT`
   - `GF_LOKI_ENDPOINT`: Grafana Loki HTTP API endpoint

### Deployment

To deploy infrastructure to AWS:

```bash
pnpm run serverless:deploy --region us-east-2 --stage dev
```

To remove deployment:

```bash
pnpm run serverless:remove --region us-east-2 --stage dev
```

## Public endpoint

This service is publicly accessible at the following endpoint:

- <https://api-integrations.nodary.io>

## Usage

The API provides the following endpoints:

- `POST /grafanaLokiAccess`: Generate and store token that will be used to authorize partner providers to send Airnode
  feed logs
- `DELETE /grafanaLokiAccess`: Delete Grafana Loki access token
- `POST /signedApiAccess`: Generate and store token that will be used to authorize partner providers to send signed data
- `DELETE /signedApiAccess`: Delete signed API access token
- `GET /deploymentStatus`: Get status for the deployment

### Local development

Start local dynamodb server:

```bash
pnpm run local:db:up
```

Initialize tables:

```bash
pnpm run local:db:init
```

Spin up local `express` server to mimic AWS API gateway:

```bash
pnpm run local:start
```

You can use following valid examples in the next section to test server.

### Examples

- Generate Grafana Loki access token:

```bash

# POST_/grafanaLokiAccess
curl --location --request POST 'https://api-integrations.nodary.io/grafanaLokiAccess?airnode=0x27f093777962Bb743E6cAC44cd724B84B7254aad' \
--header 'x-api-key: user1:pass1'

# Response will be:
# {
#    "airnode": "0x27f093777962Bb743E6cAC44cd724B84B7254aad",
#    "generatedBy": "user1",
#    "lokiEndpoint": "logs-prod-012.grafana.net",
#    "lokiToken": "EXAMPLE_eyJIjoW5nV2FzVl_TOKEN"
#    "lokiTokenId": "EXAMPLE-ca5a-TOKEN-bfd0-ID",
#    "lokiUser": "34567"
# }


# DELETE_/grafanaLokiAccess
curl --location --request DELETE 'https://api-integrations.nodary.io/grafanaLokiAccess?airnode=0x27f093777962Bb743E6cAC44cd724B84B7254aad' \
--header 'x-api-key: user1:pass1'

# Response will be:
# {
#   "message": "Grafana Loki access record for 0x27f093777962Bb743E6cAC44cd724B84B7254aad is deleted"
# }


# POST_/signedApiAccess
curl --location --request POST 'https://api-integrations.nodary.io/signedApiAccess?airnode=0x27f093777962Bb743E6cAC44cd724B84B7254aad' \
--header 'x-api-key: user1:pass1'

# Response will be:
# {
#    "airnode": "0x27f093777962Bb743E6cAC44cd724B84B7254aad",
#    "bearerToken": {
#        "api3": "EXAMPLE85c9f06944BEARER57dbe0e993TOKEN",
#        "nodary": "EXAMPLEb2d863deBEARERcdcaf2a77fTOKEN"
#    },
#    "generatedBy": "user1"
# }

# DELETE_/signedApiAccess
curl --location --request DELETE 'https://api-integrations.nodary.io/signedApiAccess?airnode=0x27f093777962Bb743E6cAC44cd724B84B7254aad' \
--header 'x-api-key: user1:pass1'

# Response will be:
# {
#   "message": "Signed API access record for 0x27f093777962Bb743E6cAC44cd724B84B7254aad is deleted"
# }
```

- Check deployment status for the `airnode-feed` with airnode address `0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7`

```bash
# GET_/deploymentStatus
curl --location 'https://api-integrations.nodary.io/deploymentStatus?airnode=0x27f093777962Bb743E6cAC44cd724B84B7254aad&app=airnode-feed'
```

## References

- Custom domain support for AWS API Gateway and CDN caching, see
  [the page](https://kylebarron.dev/blog/caching-lambda-functions-cloudflare).
