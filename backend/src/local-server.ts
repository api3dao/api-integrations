import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import { getToken } from './handlers';
import type { APIGatewayProxyEvent } from 'aws-lambda';

const { PORT } = process.env;

const port = PORT || 8090;
const app = express();

app.post('/getToken', express.json(), async (req, res) => {
  const result = await getToken({
    body: JSON.stringify(req.body)
  } as APIGatewayProxyEvent);
  res.status(result.statusCode).header(result.headers).send(result.body);
});

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default server;
