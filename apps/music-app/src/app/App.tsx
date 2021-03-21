import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';

import { setupApi } from '@monorepo-test/shared/frontend/api';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@material-ui/core';
import { Router } from '@monorepo-test/shared/frontend/ui';
import { routes } from './routes';

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
