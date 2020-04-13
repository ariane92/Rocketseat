import express, { response, json } from 'express';
import { helloWorld } from './routes';

const app = express();
app.use(json());

app.get('/', helloWorld)

app.listen(3333);