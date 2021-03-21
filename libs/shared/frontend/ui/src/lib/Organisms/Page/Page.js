import React from 'react';
import { Box } from '@material-ui/core';
import { AppBar, Loader } from '../../..';
const Page = ({ title, children, loading }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar, { title: title }),
        loading ? (React.createElement(Loader, null)) : (React.createElement(Box, { component: "div", p: 1 }, children))));
};
export { Page };
//# sourceMappingURL=Page.js.map