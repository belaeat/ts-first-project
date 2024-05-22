// imports

import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// variabls

const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

// methods

app.get('/', (req: Request, res: Response) => {
  // testing ESLint
  const a = 10;

  res.send(a);
});

export default app;
