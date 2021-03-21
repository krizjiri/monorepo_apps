import React from 'react';
import { AppBar } from 'libs/ui/src/lib/Organisms/AppBar/AppBar';
const Page = ({ title, children }) => {
    return (React.createElement("div", null,
        React.createElement(AppBar, { title: title }),
        children));
};
export { Page };
//# sourceMappingURL=Page.js.map