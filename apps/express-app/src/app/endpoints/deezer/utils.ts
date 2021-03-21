import { ResponseItem } from 'libs/types/src';

const transformMusicSearchToResponse = (data: any): ResponseItem[] => {
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
