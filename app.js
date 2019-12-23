const express = require('express');
const logger = require('morgan');
const debug = require('debug')('score-2.0-api:server');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => res.send("Hello"));

app.listen(PORT, () => debug(`Listening on ${PORT}`));
