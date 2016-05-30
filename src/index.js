import express from 'express';
const app = express();

// Import environment variables from .env file
require('node-env-file')('./.env', {raise: false});

import winston from 'winston';

import middleware from './middleware/boilerplate.js';
app.use('/', middleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	winston.info('Listening on port ', port);
});
