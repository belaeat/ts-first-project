// imports

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.routes';

// variabls

const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentRoutes);

// methods

app.get('/', (req: Request, res: Response) => {
  // testing ESLint
  const a = 10;

  res.send(a);
});

export default app;
