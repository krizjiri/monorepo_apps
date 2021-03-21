import React, { useEffect } from 'react';

import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { endpoints } from 'apps/movies-app/src/app/endpoints';
import { ResponseItem, SearchItemRequest } from 'libs/types/src';
import { Page } from 'libs/ui/src/lib/Organisms/Page/Page';
import { GridList } from 'libs/ui/src/lib/Molecules/GridList/GridList';

type Props = {};

const HomePage: React.FC<Props> = () => {
  const params = { name: 'Spider' };

  const [fetchList, { data, loading }] = useFetch<
    ResponseItem[],
    SearchItemRequest
  >({
    endpoint: endpoints.searchMovies,
  });

  useEffect(() => {
    fetchList({ params });
  }, []);

  return (
    <Page title={'Movies'} loading={loading}>
      <GridList data={data} />
    </Page>
  );
};

export { HomePage };
