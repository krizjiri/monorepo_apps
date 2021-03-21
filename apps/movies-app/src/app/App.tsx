import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';

import { setupApi } from '@monorepo-test/shared/frontend/api';
import { Router } from '@monorepo-test/shared/frontend/ui';
import { routes } from './routes';

const App = () => {
  useLayoutEffect(() => {
    setupApi();
  }, []);

  return (
    <BrowserRouter>
      <Router routes={routes} />
    </BrowserRouter>
  );
};

export default App;
