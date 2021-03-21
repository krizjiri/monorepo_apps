import { getApi } from '@monorepo-test/shared/frontend/api';
import { ResponseItem } from 'libs/types/src/lib/responses/responseItem';
import { SearchItemRequest } from 'libs/types/src/lib/requests/requestItem';
import { endpointPaths } from './endpointPaths';

const { searchMoviePath, searchMusicPath } = endpointPaths;

const endpoints = {
  searchMovies: (params: SearchItemRequest) =>
    getApi().get<ResponseItem[]>(searchMoviePath, { params }),
  searchMusic: (params: SearchItemRequest) =>
    getApi().get<ResponseItem[]>(searchMusicPath, { params }),
};

export { endpoints };
