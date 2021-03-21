import axios, { AxiosInstance } from 'axios';

let api: AxiosInstance | null = null;

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
