import { ResponseItem } from '@monorepo-test/shared/types';

const transformMusicSearchToResponse = (data): ResponseItem[] => {
  const tracks = data.data || [];

  return tracks.map(track => {
    return {
      id: track.id,
      name: track.title,
      imgUrl: track.album.cover_big,
      mediaType: 'music',
    };
  });
};

export { transformMusicSearchToResponse };
