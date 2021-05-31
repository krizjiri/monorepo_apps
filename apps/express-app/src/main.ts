/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import { endpointPaths } from '@monorepo-test/shared/endpoints';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { searchDeezerMusic } from './app/endpoints/deezer/deezer';
import { searchMovie } from './app/endpoints/imdb/imdb';
import * as path from 'path';

const {
  searchMusicPath,
  searchMoviePath,
  getMovieDetail,
  getMusicDetail,
} = endpointPaths;

const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, '../movies-app');

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-app!' });
});

app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});


app.get<unknown, ResponseItem[], unknown, SearchItemRequest>(
  searchMusicPath,
  async (req, res) => {
    const data = await searchDeezerMusic(req.query.name);
    res.send(data);
  },
);

app.get<unknown, ResponseItem[], unknown, SearchItemRequest>(
  searchMoviePath,
  async (req, res) => {
    console.log(req);
    const data = await searchMovie(req.query.name);
    res.send(data);
  },
);

app.get(getMovieDetail, async (req, res) => {
  res.send('Movie detail');
});

app.get(getMusicDetail, async (req, res) => {
  res.send('Music detail');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export { app };
