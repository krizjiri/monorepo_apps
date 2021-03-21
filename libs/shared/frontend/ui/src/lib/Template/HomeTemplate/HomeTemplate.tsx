import React, { useEffect, useState } from 'react';
import { endpoints } from '@monorepo-test/shared/endpoints';
import { ResponseItem, SearchItemRequest } from '@monorepo-test/shared/types';
import { useFetch } from '@monorepo-test/shared/frontend/hooks';
import { Page } from '../../Organisms/Page/Page';
import { GridList } from '../../Molecules/GridList/GridList';
import { SearchBar } from '../../Organisms/SearchBar/SearchBar';
const { searchMovies, searchMusic } = endpoints;

type Props = {
  pageTitle: string;
  searchTitle: string;
  media: 'music' | 'movie';
};

const HomeTemplate: React.FC<Props> = ({ pageTitle, searchTitle, media }) => {
  const endpoint = media === 'music' ? searchMusic : searchMovies;

  const [searchValue, setSearchValue] = useState('');
  const [fetchList, { data, loading, reset }] = useFetch<
    ResponseItem[],
    SearchItemRequest
  >({
    endpoint,
  });

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
      <SearchBar label={searchTitle} onChange={setSearchValue} withDebounce />
      <GridList data={data} loading={loading} />
    </Page>
  );
};

export { HomeTemplate };
