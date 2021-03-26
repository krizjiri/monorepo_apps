import React, { useEffect, useState } from 'react';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { Payload } from '@monorepo-test/shared/frontend/hooks';
import { SearchBar } from './SearchBar';
import { Page } from './Page';
import { CardGrid } from './CardGrid';

type Props = {
  searchTitle: string;
  pageTitle: string;
  fetchList: (request: Payload<ResponseItem[], SearchItemRequest>) => void;
  data: ResponseItem[];
  loading?: boolean;
  reset?: () => void;
  variant?: 'movie' | 'music';
};

const HomeTemplate: React.FC<Props> = ({
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
    <Page loading={loading}>
      <SearchBar
        label={searchTitle}
        onSubmit={setSearchValue}
        loading={loading}
      />
      <CardGrid data={data} loading={loading} />
    </Page>
  );
};

export { HomeTemplate };
