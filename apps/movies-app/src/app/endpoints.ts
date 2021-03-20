import { getApi } from '@monorepo-test/api';
import { ResponseItem } from 'libs/types/src/lib/responses/responseItem';
import { SearchItemRequest } from 'libs/types/src/lib/requests/requestItem';

const endpoints = {
  searchItems: (params: SearchItemRequest) =>
    getApi().get<ResponseItem[]>('/movie', { params }),
};

export { endpoints };
