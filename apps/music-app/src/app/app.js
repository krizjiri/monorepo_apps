import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';
import { setupApi } from '@monorepo-test/shared/frontend/api';
import { ThemeProvider } from '@emotion/react';
import { Router } from '@monorepo-test/shared/frontend/ui';
import { routes } from './routes';
const theme = {};
const App = () => {
    useLayoutEffect(() => {
        setupApi();
    }, []);
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(BrowserRouter, null,
            React.createElement(Router, { routes: routes }))));
};
export default App;
//# sourceMappingURL=App.js.map