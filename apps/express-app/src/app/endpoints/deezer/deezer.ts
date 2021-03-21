import axios from 'axios';

import { transformMusicSearchToResponse } from 'apps/express-app/src/app/endpoints/deezer/utils';

const searchDeezerMusic = async (searchName: string) => {
  try {
    const response = await axios.get('https://api.deezer.com/search', {
      params: {
        q: searchName,
      },
    });

    console.log(response);

    return transformMusicSearchToResponse(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { searchDeezerMusic };
