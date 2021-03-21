/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';

import { searchMovie } from 'apps/express-app/src/app/endpoints/imdb/imdb';
import { ResponseItem, SearchItemRequest } from 'libs/types/src';
import { searchSpotifyMusic } from 'apps/express-app/src/app/endpoints/lastfm/spotify';

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-app!' });
});

app.get<{}, {}, {}, SearchItemRequest>('/music', async (req, res) => {
  const data = await searchSpotifyMusic(req.query.name);
  res.send(data);
});

app.get<{}, ResponseItem[], {}, SearchItemRequest>(
  '/movie',
  async (req, res) => {
    console.log(req);
    const data = await searchMovie(req.query.name);
    res.send(data);
  },
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export { app };
