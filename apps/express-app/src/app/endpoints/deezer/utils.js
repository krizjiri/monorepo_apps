const transformMusicSearchToResponse = (data) => {
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
//# sourceMappingURL=utils.js.map