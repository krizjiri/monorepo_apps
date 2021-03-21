const transformMusicSearchToResponse = (data) => {
    var _a;
    const tracks = ((_a = data === null || data === void 0 ? void 0 : data.tracks) === null || _a === void 0 ? void 0 : _a.items) || [];
    return tracks.map(track => {
        var _a, _b, _c;
        return {
            id: track.id,
            name: track.name,
            imgUrl: (_c = (_b = (_a = track === null || track === void 0 ? void 0 : track.album) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.url,
            mediaType: 'music',
        };
    });
};
export { transformMusicSearchToResponse };
//# sourceMappingURL=utils.js.map