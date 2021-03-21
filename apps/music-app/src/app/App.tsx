import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';

import { Router } from 'libs/ui/src/lib/Molecules/Router/Router';
import { routes } from 'apps/music-app/src/app/routes';
import { setupApi } from '@monorepo-test/shared/frontend/api';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@material-ui/core';

const theme: Partial<Theme> = {};

const App = () => {
  useLayoutEffect(() => {
    setupApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router routes={routes} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
