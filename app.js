const express = require('express');
const logger = require('morgan');
const debug = require('debug')('score-2.0-api:server');

const gameController = require('./controllers/games');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const API_V1_BASE = '/api/v1';

const GAME_BASE_ROUTE = `${API_V1_BASE}/games`;
app.post(GAME_BASE_ROUTE, gameController.createGame);
app.get(`${GAME_BASE_ROUTE}/:id`, gameController.getGame);
app.put(`${GAME_BASE_ROUTE}/:id`, gameController.updateGame);
app.delete(`${GAME_BASE_ROUTE}/:id`, gameController.deleteGame);
app.post(`${GAME_BASE_ROUTE}/:id/join`, gameController.joinGame);

app.listen(PORT, () => debug(`Listening on ${PORT}`));
