import { __awaiter } from "tslib";
import axios from 'axios';
import { transformMusicSearchToResponse } from 'apps/express-app/src/app/endpoints/lastfm/utils';
const searchSpotifyMusic = (searchName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: 'Bearer BQB2-zsELOyTPoBkH0MfRW0I75thDKNUPet28zqAmDB5sIRXU4sEUw8X9AW0lpGd2SeVUfEE-ipBx25MAeWAz3Ohk8Y_DhSaeP0gx64lvs4LLu9txBiJYH6ENBzGJ5C2Px9jduqm3HP-V_6hDu-4SqYXUhfHbK5szhOJ2CTg',
            },
            params: {
                q: searchName,
                type: 'track',
            },
        });
        transformMusicSearchToResponse(response.data);
        return transformMusicSearchToResponse(response.data);
    }
    catch (error) {
        console.log(error);
        return [];
    }
});
export { searchSpotifyMusic };
//# sourceMappingURL=spotify.js.map