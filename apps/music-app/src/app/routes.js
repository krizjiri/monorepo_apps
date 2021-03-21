import { HomePage } from 'apps/music-app/src/app/pages/HomePage';
import { DetailPage } from 'apps/music-app/src/app/pages/DetailPage';
const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage,
        exact: true,
    },
    { name: 'detail', path: '/music', component: DetailPage },
];
export { routes };
//# sourceMappingURL=routes.js.map