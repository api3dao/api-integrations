import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import {
  evaluateDeploymentStatus,
  connectGrafanaLokiAccess,
  createGrafanaLokiAccess,
  deleteGrafanaLokiAccess,
  connectSignedApiAccess,
  createSignedApiAccess,
  deleteSignedApiAccess
} from './handlers';
import type { APIGatewayProxyEvent } from 'aws-lambda';

const { PORT } = process.env;

const port = PORT || 8090;
const app = express();

app.get('/grafanaLokiAccess', express.json(), async (req, res) => {
  const result = await connectGrafanaLokiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.post('/grafanaLokiAccess', express.json(), async (req, res) => {
  const result = await createGrafanaLokiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.delete('/grafanaLokiAccess', express.json(), async (req, res) => {
  const result = await deleteGrafanaLokiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.get('/signedApiAccess', express.json(), async (req, res) => {
  const result = await connectSignedApiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.post('/signedApiAccess', express.json(), async (req, res) => {
  const result = await createSignedApiAccess({
    queryStringParameters: req.query,
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.delete('/signedApiAccess', express.json(), async (req, res) => {
  const result = await deleteSignedApiAccess({
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
