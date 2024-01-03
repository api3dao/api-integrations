# API3 logging service

This repository contains the backend API which is responsible for creating tokens for partner providers to push their
logs to Grafana Loki instance, checking the heartbeats of deployments, and performing other operational tasks. The API
provides a simple and secure way for partner providers to access the API3 log service, and ensures that deployments are
running smoothly. To get started, see the "Getting Started" section below.

## Getting Started

### Configuration

1. Copy `.env` from the `example.env` file.
2. Open the `.env` file and update the environment variables:
   - `TOKEN_REQUEST_MESSAGE`: Message that is expected to be signed by frontend
   - `GF_CLOUD_REGION`: Region of the utilizied Grafana Cloud instance
   - `GF_CLOUD_TOKEN`: Grafana Cloud token that is enabled to generate token and read logs
   - `GF_CLOUD_ACCESS_POLICY_ID`: Policy to be used while generating token, expected to write-only logs (logs:write)
   - `GF_LOKI_USER`: Grafana Loki user able to use endpoint `GF_LOKI_ENDPOINT`
   - `GF_LOKI_ENDPOINT`: Grafana Loki HTTP API endpoint

### Deployment

To deploy infrastructure to AWS:

```bash
pnpm deploy --region us-east-2 --stage dev
```

To remove deployment:

```bash
pnpm removeDeployment --region us-east-2 --stage dev
```

## Public Endpoint

This service is publicly accessible at the following endpoint:

- <https://integration.nodary.io>

## Usage

The API provides the following endpoints:

- `POST /generateToken`: Get token to push logs.
- `GET /deploymentStatus`: Get status for the deployment.

### Local development

Start local dynamodb server:

```bash
pnpm dynamodb-local-up
```

Initialize tables:

```bash
pnpm init-tables
```

Spin up local `express` server to mimic AWS API gateway:

```bash
pnpm start-local
```

You can use following valid examples in the next section to test server.

### Examples

- Generate token:

```bash

# Upsert batch of signed data (HTTP POST)
curl -L -X POST "https://integration.nodary.io/generateToken" -H "Content-Type: application/json" -H "X-API-KEY: exampleUser:exampleApiKey" -d "{\"airnode\":\"0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7\"}"

# Response will be:
# {
#    "airnode": "0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7",
#    "lokiEndpoint": "logs-prod-012.grafana.net",
#    "lokiToken": "glc_somelokiWV1LXQtoken==",
#    "lokiUser": "123456"
# }

```

- Check deployment status for the `airnode-feed` with airnode address `0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7`

```bash
curl --location 'localhost:8090/deploymentStatus?airnode=0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7&app=airnode-feed'
```

## References

- Custom domain support for AWS API Gateway and CDN caching, see
  [the page](https://kylebarron.dev/blog/caching-lambda-functions-cloudflare).
