# API integrations Frontend Application

This is the frontend application for the API integrations project.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 16)
- [npm](https://www.npmjs.com/) (>= 9)

### Installation

```bash
npm install
```

### Running the application

```bash
npm run start
```

### Accessing the application

The application will be available at [http://localhost:3056](http://localhost:3056).

## General Information

### Home page

The home page is the main page of the application. API providers can paste their Airnode address to view their API
configurations.

### API provider page

#### Active Deployment

The API provider page contains the details of an API provider. An api provider can have only one active deployment for
every deployment locations. These deployment locations are: `aws` and `local`.

- The `aws` deployment location is the production deployment location and hosted on AWS.
- The `local` deployment location is the production deployment location and hosted as a container on the local machine
  or on a server.

Each API integration has a name, deployment status, and a list of feeds.

#### Candidate Deployment

This section contains a list of candidate deployments for the API provider. API provider can replace the active
deployment with a candidate deployment.

### Deployment page

The deployment page contains the ois details. A deployment can have multiple oises. Each can have their own feeds, and
other details.

Thus deployment page contains the following sections:

- Airnode feed mnemonic
- OIS details
- Deployment details

#### Airnode feed mnemonic

This section contains the mnemonic of the Airnode feed account. This mnemonic is used to sign the transactions.

#### OIS details

This section contains the details of the OIS. The OIS details are:

- OIS title
- Feeds

#### Deployment details

This section contains the details of the deployment. The deployment details are:

- Deployment location
- Deployment instructions

# Usage

## Deployment details

Click on the deployment name to view the details of the deployment. The page contains the details of the OIS and the
deployment section.

## OIS details

Each OIS has its own feeds.

### View feeds

Click on the expand button on `Feeds` section to view the feeds of the OIS.

#### Feed details:

- Feed name
- Feed request type and url
- Feed parameters
- Feed post processing

## View deployment instructions

Click on the expand deployment location to view the deployment instructions. The deployment locations are:

- AWS
- Local
- Staging

### AWS deployment instructions

The AWS deployment instructions contains the following:

- Enter your secrets on specified fields before upload your template
- Go to CloudFormation section in the AWS dashboard, and upload your template
- Wait for AWS to deploy everything and check CloudWatch log group named myAppLogs to see what's up.
- After 1 or 2 minutes, you should see your signed data in https://pool.nodary.io/ after a successful deployment.

### Local deployment instructions

The local deployment instructions contains the following:

- Run the following command to deploy the OIS on your local machine or server:

for Windows:

```bash
docker run -it --rm ^
      -v "%cd%:/app/config" ^
      api3/airnode-feed deploy
```

for Linux and Mac:

```bash
docker run -it --rm \\
      -e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \\
      -v "$(pwd):/app/config" \\
      api3/airnode-feed deploy;
```

## Compare deployments

Click on the `Compare` button to compare the active deployment with the candidate deployment. The comparison is done for
each ois and feed.

<img width="979" alt="image" src="https://github.com/api3dao/api-integrations/assets/31757771/5e1d4939-90a7-4add-8f36-c09fb2c7a43e">

- Added feeds
- Removed feeds
- Updated feeds
- Unchanged feeds

<img width="975" alt="image" src="https://github.com/api3dao/api-integrations/assets/31757771/271a7ac4-18f6-4fd1-97b3-b76ca003e3b5">

## Deploying Frontend

### Prerequisites

- A new branch should be created for the deployment.
- The branch should be merged with the `main` branch.
- The `main` branch should be up to date with the `origin/main` branch.
