import React, { useEffect, useState } from 'react';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { Payload } from '@monorepo-test/shared/frontend/hooks';
import { Page } from '../../Organisms/Page/Page';
import { GridList } from '../../Molecules/GridList/GridList';
import { SearchBar } from '../../Organisms/SearchBar/SearchBar';

type Props = {
  pageTitle: string;
  searchTitle: string;
  fetchList: (request: Payload<ResponseItem[], SearchItemRequest>) => void;
  data: ResponseItem[];
  loading?: boolean;
  reset?: () => void;
};

const HomeTemplate: React.FC<Props> = ({
  pageTitle,
  searchTitle,
  data = [],
  fetchList,
  loading,
  reset,
}) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue.length === 0) {
      reset();
    } else {
      const params = {
        name: searchValue,
      };

      fetchList({ params });
    }
  }, [searchValue]);

  return (
    <Page title={pageTitle}>
      <SearchBar
        label={searchTitle}
        onSubmit={setSearchValue}
        loading={loading}
      />
      <GridList data={data} loading={loading} />
    </Page>
  );
};

export { HomeTemplate };
