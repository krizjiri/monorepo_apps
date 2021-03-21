import axios from 'axios';

import { transformMusicSearchToResponse } from 'apps/express-app/src/app/endpoints/lastfm/utils';

const searchSpotifyMusic = async (searchName: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization:
          'Bearer BQDTfkbVIZNc0iRRwFV_Y1tgMiyQ2YTG6GC65VSe2AHlkjynGqPG9P4gqL0o3kt0ARo-tTz9ymOxA_ZiG5MaTGteJbuFLoIaJ0oO8V-isvxo5FUZSFPfI2tNqmqf9i31zchnXr-NSs50WJFYTFtqooqBwSPfXPNc8KxDhS_k',
      },
      params: {
        q: searchName,
        type: 'track',
      },
    });

    transformMusicSearchToResponse(response.data);

    return transformMusicSearchToResponse(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { searchSpotifyMusic };
