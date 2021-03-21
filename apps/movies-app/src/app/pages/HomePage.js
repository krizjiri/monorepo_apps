import React, { useEffect } from 'react';
import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { endpoints } from 'apps/movies-app/src/app/endpoints';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Page } from 'libs/ui/src/lib/Organisms/Page/Page';
const HomePage = () => {
    const params = { name: 'Spider' };
    const [fetchList, { data }] = useFetch({
        endpoint: endpoints.searchMovies,
    });
    useEffect(() => {
        fetchList({ params });
    }, []);
    return (React.createElement(Page, { title: 'Movies' },
        React.createElement(List, null, data === null || data === void 0 ? void 0 : data.map(item => (React.createElement(ListItem, { key: item.id || item.name },
            React.createElement(ListItemText, { primary: item.name })))))));
};
export { HomePage };
//# sourceMappingURL=HomePage.js.map