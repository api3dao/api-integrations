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
yarn deploy --region us-east-2 --stage dev
```

To remove deployment:

```bash
yarn removeDeployment --region us-east-2 --stage dev
```

## Public Endpoint

This service is publicly accessible at the following endpoint:

- <https://integration.nodary.io>

## Usage

The API provides the following endpoints:

- `POST /getToken`: Get token to push logs.
- `GET /deploymentStatus`: Get status for the deployment.

### Local development

Start local dynamodb server:

```bash
yarn dynamodb-local-up
```

Initialize tables:

```bash
yarn init-tables
```

Spin up local `express` server to mimic AWS API gateway:

```bash
yarn start-local
```

You can use following valid examples in the next section to test server.

### Examples

- Create test data to get token:

```bash
MNEMONIC="YOUR-AIRNODE-MNEMONIC" TOKEN_REQUEST_MESSAGE="API3 log write token" yarn create-test-data
```

- Get token:

```bash

# Upsert batch of signed data (HTTP POST)
curl --location 'localhost:8090/getToken' \
--header 'Content-Type: application/json' \
--data '{
  "signature": "0x4aeab1eec4440cd920a3cda7dd7bcadc9cde30751be03ce63474fadcba30e2fc0a17dd5f340eafe355d42d1bd1b6127559fd0efb84250dad6d9854d29bcde5f91c",
  "message": "API3 log write token",
  "timestamp": "1698962113174"
}'

# Response will be:
# {
#    "airnode": "0x6CFec029322bfb6f8f6a5A6662b4A3136eeD83A7",
#    "lokiEndpoint": "logs-prod-012.grafana.net",
#    "lokiToken": "glc_somelokiWV1LXQtoken==",
#    "lokiUser": "123456"
# }

```

- Check deployment status for the `pusher` with airnode address `0xdAD65588187bC1a76C482174e25ACcED1413d2a1`

```bash
curl --location 'localhost:8090/deploymentStatus?airnode=0xdAD65588187bC1a76C482174e25ACcED1413d2a1&app=pusher'
```

## References

- Custom domain support for AWS API Gateway and CDN caching, see
  [the page](https://kylebarron.dev/blog/caching-lambda-functions-cloudflare).
