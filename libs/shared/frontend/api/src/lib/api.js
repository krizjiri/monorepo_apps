import axios from 'axios';
let api = null;
const setupApi = () => {
  api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  });
};
const getApi = () => {
  return api;
};
export { getApi, setupApi };
//# sourceMappingURL=api.js.map
