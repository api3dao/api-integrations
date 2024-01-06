import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import { evaluateDeploymentStatus, connectOrCreateGrafanaLokiAccess } from './handlers';
import type { APIGatewayProxyEvent } from 'aws-lambda';

const { PORT } = process.env;

const port = PORT || 8090;
const app = express();

app.post('/grafanaLokiAccess', express.json(), async (req, res) => {
  const result = await connectOrCreateGrafanaLokiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.get('/deploymentStatus', express.json(), async (req, res) => {
  const result = await evaluateDeploymentStatus({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default server;
