import React, { useEffect } from 'react';
import { useFetch } from 'libs/hooks/src/lib/useFetch';
import { endpoints } from 'apps/music-app/src/app/endpoints';
import { Page } from 'libs/ui/src/lib/Organisms/Page/Page';
import { GridList } from 'libs/ui/src/lib/Molecules/GridList/GridList';
const HomePage = () => {
    const params = { name: 'Spider' };
    const [fetchList, { data }] = useFetch({
        endpoint: endpoints.searchMusic,
    });
    useEffect(() => {
        fetchList({ params });
    }, []);
    return (React.createElement(Page, { title: 'Music' },
        React.createElement(GridList, { data: data })));
};
export { HomePage };
//# sourceMappingURL=HomePage.js.map