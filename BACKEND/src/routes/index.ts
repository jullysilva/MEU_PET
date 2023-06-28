import { Router } from 'express';
import transactionRouter from './transaction.routes';
import animalRouter from './animal.routes';

const routes = Router();

routes.use('/animal', animalRouter);

export default routes;
