import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import validator from './validator';
import bmi from './bmi';

const app = express();

// TODO implement me :)

app.use(validator);

app.get(
  '/bmi/height/weight/weightUnit/heightUnit',
  (req: Request, res: Response) => {
    const height = parseInt(req.params.height);
    const weight = parseInt(req.params.weight);
    const heightUnit = parseInt(req.params.heightUnit);
    const weightUnit = parseInt(req.params.weightUnit);
    const result = bmi({ weight, weightUnit, height, heightUnit });
    res.send(result);
  }
);

app.post('/bmi', bodyParser.json(), (req: Request, res: Response) => {
  const height = req.body.height;
  const weight = req.body.weight;
  const heightUnit = req.body.heightUnit;
  const weightUnit = req.body.weightUnit;
  const result = bmi({ weight, weightUnit, height, heightUnit });
  res.send(result);
});
export default app;
