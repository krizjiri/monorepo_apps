import axios from 'axios';
import { transformMusicSearchToResponse } from 'apps/express-app/src/app/endpoints/lastfm/utils';
import { ResponseItem } from 'libs/types/src';

const searchMusic = async (searchName: string): Promise<ResponseItem[]> => {
  try {
    const response = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      headers: {
        'user-agent': 'Dataquest',
      },
      params: {
        api_key: '409a88c51a8972e6675a4dba07346ccd',
        method: 'track.search',
        format: 'json',
        track: searchName,
      },
    });

    return transformMusicSearchToResponse(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { searchMusic };
