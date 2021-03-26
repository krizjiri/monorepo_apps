import React from 'react';
import { HomeTemplate } from '@monorepo-test/shared/frontend/ui';
import { useFetch } from '@monorepo-test/shared/frontend/hooks';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { endpoints } from '@monorepo-test/shared/endpoints';

const HomePage: React.FC = () => {
  const [fetchList, { data, loading, reset }] = useFetch<
    ResponseItem[],
    SearchItemRequest
  >({
    endpoint: endpoints.searchMovies,
  });

  return (
    <HomeTemplate
      pageTitle={'Movies'}
      searchTitle={'Movie search'}
      variant="movie"
      fetchList={fetchList}
      data={data}
      reset={reset}
      loading={loading}
    />
  );
};

export { HomePage };
