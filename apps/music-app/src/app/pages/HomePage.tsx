import React, { useEffect } from 'react';

import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { ResponseItem, SearchItemRequest } from 'libs/types/src';
import { endpoints } from 'apps/music-app/src/app/endpoints';
import { Page } from 'libs/ui/src/lib/Organisms/Page/Page';
import { GridList } from 'libs/ui/src/lib/Molecules/GridList/GridList';

const HomePage: React.FC = () => {
  const params = { name: 'Spider' };

  const [fetchList, { data }] = useFetch<ResponseItem[], SearchItemRequest>({
    endpoint: endpoints.searchMusic,
  });

  useEffect(() => {
    fetchList({ params });
  }, []);

  return (
    <Page title={'Music'}>
      <GridList data={data} />
    </Page>
  );
};

export { HomePage };
