import { ResponseItem } from 'libs/types/src';

const transformMusicSearchToResponse = (data: any): ResponseItem[] => {
  const tracks = data?.tracks?.items || [];

  return tracks.map(track => {
    return {
      id: track.id,
      name: track.name,
      imgUrl: track?.album?.images?.[0]?.url,
      mediaType: 'music',
    };
  });
};

export { transformMusicSearchToResponse };
