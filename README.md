# api-integrations

Repository for managing API integrations.

## Frontend

See `frontend`'s [README](/frontend/README.md).

## Deployment management

### Generating a `airnode-feed` deployment

1. Run the script

```shell
pnpm generate-airnode-feed-deployment
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

4. Select the deployment type.

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

## Package update

Run the following command to update the package:

```bash
yarn changeset
```

Then follow the instructions in the terminal:

```bash
🦋  What kind of change is this for api-integrations? (current version is x.x.x)
❯ patch
  minor
  major
```

```bash
🦋  Please enter a summary for this change (this will be in the changelogs).
🦋    (submit empty line to open external editor)
🦋  Summary ›  [CHANGES]
```

After that, you will be asked to confirm the changeset:

```bash
🦋  Summary › [CHANGES]
🦋
🦋  === Summary of changesets ===
🦋  patch:  api-integrations
🦋
🦋  Is this your desired changeset? (Y/n) › true
```

If you confirm, the changeset will be created and you will be asked to publish it:

```bash
🦋  Changeset added! - you can now commit it
🦋
🦋  If you want to modify or expand on the changeset summary, you can find it here
🦋  info .changeset/[MD_FILE]
✨  Done.
```

Commit the changeset and push it to the repository:

```bash
git add .
git commit -m "chore: update api-integrations"
git push
```

Merge the changeset to the main branch:

```bash
git checkout main
git merge [BRANCH_NAME]
git push
```

To publish the package, merge main to the `production` branch:

```bash
git checkout production
git merge main
git push
```

Changeset will raise a PR to the `production` branch. After the PR is merged, the package will be published to npm.
