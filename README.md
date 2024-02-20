# api-integrations

Repository for managing API integrations.

## Frontend

See `frontend`'s [README](/frontend/README.md).

## Deployment management

### Generating a `airnode-feed` deployment

1. Run the script.

```shell
pnpm generate-airnode-feed-deployment
```

2. Select the API.

```bash
$ ts-node src/config-generation/airnode-feed/generate-deployment.ts
? Select an API to create deployment: › - Use arrow-keys. Return to submit.
❯   api-1
    api-2
    some-api
    ...
```

3. Select the deployment type.

```
? Select the deployment type: › - Use arrow-keys. Return to submit.
❯   staging
    candidate
```

4. Deployment will be created under `./data/apis/<api-name>/deployments/<deployment_type>-deployments`.

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


#### api-data.json

There is `api-data.json` file for each API provider in `data/apis/<api-name>/api-data.json` path. This file includes the below information.

* `alias`: Unique alias used for API.
* `name`: Name of the API for public use.
* `airnode`: Airnode address of the API.
* `xpub`: Extended public key.
* `supportedFeedsInBatches`: Name of the data feeds in batches supported by API, seperated by OIS titles.
* `deploymentLocations`: Deployment locations where API provider deployed their Airnode feed to.
* `homepageUrl`: API provider's website's homepage URL.
* `verifiedBaseUrl`: URL where includes API provider's Airnode address in it's TXT records for people to be able to be confirm the Airnode address.
* `signedApiUrl`: URL for the Signed API deployed by the API provider.
* `productionSignedApiUrls`: URLs of the Signed APIs where Airnode feeds deployed by the API provider push data to.
* `stagingSignedApiUrl`: URL of the Signed API where staging Airnode feed deployed by the API provider push data to.
