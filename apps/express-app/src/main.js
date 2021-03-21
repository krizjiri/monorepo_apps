/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { __awaiter } from "tslib";
import express from 'express';
import cors from 'cors';
import { searchMovie } from 'apps/express-app/src/app/endpoints/imdb/imdb';
import { searchSpotifyMusic } from 'apps/express-app/src/app/endpoints/lastfm/spotify';
const app = express();
app.use(cors({
    origin: '*',
}));
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to express-app!' });
});
app.get('/music', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield searchSpotifyMusic(req.query.name);
    res.send(data);
}));
app.get('/movie', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const data = yield searchMovie(req.query.name);
    res.send(data);
}));
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
export { app };
//# sourceMappingURL=main.js.map