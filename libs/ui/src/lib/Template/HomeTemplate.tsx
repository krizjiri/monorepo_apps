import React, { useEffect, useState } from 'react';
import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { ResponseItem, SearchItemRequest } from 'libs/types/src';
import { Page } from 'libs/ui/src/lib/Organisms/Page/Page';
import { SearchBar } from 'libs/ui/src/lib/Organisms/SearchBar/SearchBar';
import { GridList } from 'libs/ui/src/lib/Molecules/GridList/GridList';
import { endpoints } from 'libs/endpoints/src/lib/endpoints';

const { searchMovies, searchMusic } = endpoints;

type Props = {
  pageTitle: string;
  searchTitle: string;
  media: 'music' | 'movie';
};

const HomeTemplate: React.FC<Props> = ({ pageTitle, searchTitle, media }) => {
  const endpoint = media === 'music' ? searchMusic : searchMovies;

  const [searchValue, setSearchValue] = useState('');
  const [fetchList, { data, loading }] = useFetch<
    ResponseItem[],
    SearchItemRequest
  >({
    endpoint,
  });

  useEffect(() => {
    const params = {
      name: searchValue,
    };

    fetchList({ params });
  }, [searchValue]);

  return (
    <Page title={pageTitle}>
      <SearchBar label={searchTitle} onChange={setSearchValue} withDebounce />
      <GridList data={data} loading={loading} />
    </Page>
  );
};

export { HomeTemplate };
