import { Router } from 'express';
import animalRouter from './animal.routes';

const routes = Router();

routes.use('/animal', animalRouter);

export default routes;
