import axios, { AxiosInstance } from 'axios';

let api: AxiosInstance | null = null;

const setupApi = () => {
  // @ts-ignore
  const port = process.env.PORT || '3333'

  api = axios.create({
    baseURL: `http://localhost:${port}`,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
  });
};

const getApi = () => {
  return api;
};

export { getApi, setupApi };
