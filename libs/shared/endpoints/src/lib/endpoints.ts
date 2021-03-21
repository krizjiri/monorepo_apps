import { getApi } from '@monorepo-test/shared/frontend/api';
import { endpointPaths } from './endpointPaths';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';

const { searchMoviePath, searchMusicPath } = endpointPaths;

const endpoints = {
  searchMovies: (params: SearchItemRequest) =>
    getApi().get<ResponseItem[]>(searchMoviePath, { params }),
  searchMusic: (params: SearchItemRequest) =>
    getApi().get<ResponseItem[]>(searchMusicPath, { params }),
};

export { endpoints };
