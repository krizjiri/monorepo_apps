import { ResponseItem } from 'libs/types/src';

const transformMovieSearchToResponse = (data: any): ResponseItem[] => {
  const movies = data?.d || [];

  return movies.map(item => {
    return {
      id: item.id,
      name: item.l,
      imgUrl: item?.i?.imageUrl,
      mediaType: 'movie',
    };
  });
};

export { transformMovieSearchToResponse };
