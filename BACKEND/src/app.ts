import express from 'express';
import routes from './routes';

const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'petshop',
    user: 'admin',
    password: 'admin'
  });
  

const app = express();
app.use(express.json());
app.use(routes);

export default app;
