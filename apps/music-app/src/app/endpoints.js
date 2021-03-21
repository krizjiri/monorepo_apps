import { getApi } from '@monorepo-test/api';
const endpoints = {
    searchMusic: (params) => getApi().get('/music', { params }),
};
export { endpoints };
//# sourceMappingURL=endpoints.js.map