import { getApi } from '@monorepo-test/api';
const endpoints = {
    searchMovies: (params) => getApi().get('/movie', { params }),
};
export { endpoints };
//# sourceMappingURL=endpoints.js.map