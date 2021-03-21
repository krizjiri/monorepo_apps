import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'libs/ui/src/lib/Molecules/Router/Router';
import { routes } from 'apps/movies-app/src/app/routes';
import { setupApi } from '@monorepo-test/shared/frontend/api';
const App = () => {
  useLayoutEffect(() => {
    setupApi();
  }, []);
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Router, { routes: routes }),
  );
};
export default App;
//# sourceMappingURL=App.js.map
