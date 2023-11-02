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
npm start
```

### Accessing the application

The application will be available at [http://localhost:3056](http://localhost:3056).

## Usage

### Home page

The home page is the main page of the application. It contains a list of all the API providers.

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

The deployment page contains the ois details. A deployment can have multiple oises. Each can have their own feeds,
secret keys, and other details.

Thus deployment page contains the following sections:

- Pusher mnemonic
- OIS details
- Deployment details

#### Pusher mnemonic

This section contains the mnemonic of the pusher account. This mnemonic is used to sign the transactions.

#### OIS details

This section contains the details of the OIS. The OIS details are:

- OIS title
- API secret key
- Feeds

#### Deployment details

This section contains the details of the deployment. The deployment details are:

- Deployment location
- Deployment instructions
