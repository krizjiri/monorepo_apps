import { ResponseItem } from 'libs/types/src';

const transformMusicSearchToResponse = (data: any): ResponseItem[] => {
  const track = data?.results?.trackmatches?.track || [];

  return track.map(item => {
    return {
      id: item.mbid,
      name: item.name,
      imgUrl: item.image.find(image => image.size === 'medium')?.['#text'],
      mediaType: 'music',
    };
  });
};

export { transformMusicSearchToResponse };
