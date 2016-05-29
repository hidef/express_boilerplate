import express from 'express';
const app = express();

import winston from 'winston';

import middleware from './middleware/boilerplate.js';
app.use('/', middleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	winston.info('Listening on port ', port);
});
