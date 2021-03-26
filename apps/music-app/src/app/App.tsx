import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';

import { setupApi } from '@monorepo-test/shared/frontend/api';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
  DrawerItemProps,
  Layout,
  Router,
} from '@monorepo-test/shared/frontend/ui';
import { routes } from './routes';
import { AppConfig } from '@monorepo-test/shared/frontend/utils';
import PeopleIcon from '@material-ui/icons/People';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AlbumIcon from '@material-ui/icons/Album';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
});

const drawerItems: DrawerItemProps[] = [
  { label: 'Search music', icon: <MusicVideoIcon />, link: '/' },
  { label: 'Search interprets', icon: <PeopleIcon /> },
  { label: 'Search albums', icon: <AlbumIcon /> },
];

const App = () => {
  useLayoutEffect(() => {
    setupApi();
  }, []);

  return (
    <AppConfig variant={'music'} appName={'music-app'}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout drawerItems={drawerItems}>
            <Router routes={routes} />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AppConfig>
  );
};

export default App;
