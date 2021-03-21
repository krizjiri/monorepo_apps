import { ResponseItem } from '@monorepo-test/shared/types';

const transformMovieSearchToResponse = (data): ResponseItem[] => {
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
