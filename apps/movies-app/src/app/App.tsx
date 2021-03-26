import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';

import { setupApi } from '@monorepo-test/shared/frontend/api';
import {
  DrawerItemProps,
  Layout,
  Router,
} from '@monorepo-test/shared/frontend/ui';
import { routes } from './routes';
import { AppConfig } from '@monorepo-test/shared/frontend/utils';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';

const drawerItems: DrawerItemProps[] = [
  { label: 'Search movies', icon: <MovieIcon /> },
  { label: 'Search actors', icon: <PeopleIcon /> },
];

const App = () => {
  useLayoutEffect(() => {
    setupApi();
  }, []);

  return (
    <AppConfig variant={'movie'} appName={'movies-app'}>
      <BrowserRouter>
        <Layout drawerItems={drawerItems}>
          <Router routes={routes} />
        </Layout>
      </BrowserRouter>
    </AppConfig>
  );
};

export default App;
