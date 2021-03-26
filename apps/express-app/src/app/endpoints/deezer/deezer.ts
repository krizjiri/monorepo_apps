import axios from 'axios';

import { transformMusicSearchToResponse } from './utils';

const searchDeezerMusic = async (searchName: string) => {
  try {
    const response = await axios.get('https://api.deezer.com/search', {
      params: {
        q: searchName,
      },
    });

    return transformMusicSearchToResponse(response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { searchDeezerMusic };
