const transformMovieSearchToResponse = (data) => {
    const movies = (data === null || data === void 0 ? void 0 : data.d) || [];
    return movies.map(item => {
        var _a;
        return {
            id: item.id,
            name: item.l,
            imgUrl: (_a = item === null || item === void 0 ? void 0 : item.i) === null || _a === void 0 ? void 0 : _a.imageUrl,
            mediaType: 'movie',
        };
    });
};
export { transformMovieSearchToResponse };
//# sourceMappingURL=utils.js.map