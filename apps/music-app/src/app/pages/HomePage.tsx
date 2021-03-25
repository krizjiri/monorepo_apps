import React from 'react';
import { useFetch } from '@monorepo-test/shared/frontend/hooks';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { endpoints } from '@monorepo-test/shared/endpoints';
import { HomeTemplate } from '@monorepo-test/shared/frontend/ui';

const HomePage: React.FC = () => {
  const [fetchList, { data, loading, reset }] = useFetch<
    ResponseItem[],
    SearchItemRequest
  >({
    endpoint: endpoints.searchMusic,
  });

  return (
    <HomeTemplate
      pageTitle={'Music'}
      searchTitle={'Music search'}
      fetchList={fetchList}
      data={data}
      reset={reset}
      loading={loading}
    />
  );
};

export { HomePage };
