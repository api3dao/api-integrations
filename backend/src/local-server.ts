import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import { deploymentStatus, generateToken } from './handlers';
import type { APIGatewayProxyEvent } from 'aws-lambda';

const { PORT } = process.env;

const port = PORT || 8090;
const app = express();

app.post('/generateToken', express.json(), async (req, res) => {
  const result = await generateToken({
    body: JSON.stringify(req.body),
    headers: req.headers
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

app.get('/deploymentStatus', express.json(), async (req, res) => {
  const result = await deploymentStatus({
    queryStringParameters: req.query
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default server;
