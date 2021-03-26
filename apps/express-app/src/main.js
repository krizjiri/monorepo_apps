/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { __awaiter } from "tslib";
import express from 'express';
import cors from 'cors';
import { endpointPaths } from '@monorepo-test/shared/endpoints';
import { searchDeezerMusic } from './app/endpoints/deezer/deezer';
import { searchMovie } from './app/endpoints/imdb/imdb';
const { searchMusicPath, searchMoviePath, getMovieDetail, getMusicDetail, } = endpointPaths;
const app = express();
app.use(cors({
    origin: '*',
}));
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to express-app!' });
});
app.get(searchMusicPath, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield searchDeezerMusic(req.query.name);
    res.send(data);
}));
app.get(searchMoviePath, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const data = yield searchMovie(req.query.name);
    res.send(data);
}));
app.get(getMovieDetail, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Movie detail');
}));
app.get(getMusicDetail, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Music detail');
}));
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
export { app };
