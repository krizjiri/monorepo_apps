import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NoMatch } from 'libs/ui/src/lib/Molecules/NoMatch/NoMatch';
const Router = ({ routes }) => {
    return (React.createElement(Switch, null,
        routes.map(route => (React.createElement(Route, Object.assign({ key: route.name }, route)))),
        React.createElement(Route, { path: "*" },
            React.createElement(NoMatch, null))));
};
export { Router };
//# sourceMappingURL=Router.js.map