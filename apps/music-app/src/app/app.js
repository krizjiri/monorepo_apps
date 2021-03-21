import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'libs/ui/src/lib/Molecules/Router/Router';
import { routes } from 'apps/music-app/src/app/routes';
import { setupApi } from '@monorepo-test/api';
const App = () => {
    useLayoutEffect(() => {
        setupApi();
    }, []);
    return (React.createElement(BrowserRouter, null,
        React.createElement(Router, { routes: routes })));
};
export default App;
//# sourceMappingURL=app.js.map