import axios from 'axios';
import { ResponseItem } from 'libs/types/src';
import { transformMovieSearchToResponse } from 'apps/express-app/src/app/endpoints/imdb/utils';

const searchMovie = async (searchName: string): Promise<ResponseItem[]> => {
  try {
    const response = await axios.get(
      'https://imdb8.p.rapidapi.com/auto-complete',
      {
        headers: {
          'x-rapidapi-key':
            '5f1f3b1ad9msh9c5bbd75ef10210p15348ejsnc297b95ef405',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        },
        params: {
          q: searchName,
        },
      },
    );

    return transformMovieSearchToResponse(response.data);
  } catch (error) {
    return [];
  }
};

export { searchMovie };
