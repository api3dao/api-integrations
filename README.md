# api-integrations

Repository for managing API integrations.

## Frontend

See `frontend`'s [README](/frontend/README.md).

## Deployment management

### Generating a `airnode-feed` deployment

1. Run the script.

```shell
yarn generate-airnode-feed-deployment
```

2. Select the API.

```
$ ts-node src/config-generation/airnode-feed/generate-deployment.ts
? Select an API to create deployment: › - Use arrow-keys. Return to submit.
❯   api-1
    api-2
    some-api
    ...
```

3. Deployment will be created under `./data/apis/<api-name>/deployments/candidate-deployments`.

### Managing deployments

- Deployment folder for the each API has the below structure:

```
.
├── active-deployments
└── candidate-deployments
    └── api3-20231101-airnode-feed.json
```

- Deployments names are created in this format: `api3-YYYYMMDD-airnode-feed.json` and there should be only one or no
  deployments under `candidate-deployments`.
- Once a `candidate-deployment` is deployed by the API provider, deployment under the `candidate-deployment` will be
  manually moved under `active-deployments`. `active-deployments` will be confirmed with CI scripts. If there is no
  heartbeat from the deployment, CI won't allow pushing changes to the repository.
- Deployments will identified by `airnode-feed` configuration file's hash.

#### Heartbeat

Airnode feed minutely log the below string and the string will be parsed and returned through an API for this repository
to check deployments.

```
${airnodeAddress} - ${stage} - ${airnodeFeedVersion} - ${currentTimestamp} - ${deploymentTimestamp} - ${airnodeFeedConfigHash} - ${heartbeatSignature}
```

Through the `airnodeFeedConfigHash` it will be possible to check if the correct deployment is deployed.
