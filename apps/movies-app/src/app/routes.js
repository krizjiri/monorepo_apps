import { HomePage } from 'apps/movies-app/src/app/pages/HomePage';
import { DetailPage } from 'apps/movies-app/src/app/pages/DetailPage';
const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage,
        exact: true,
    },
    { name: 'detail', path: '/detail', component: DetailPage },
];
export { routes };
//# sourceMappingURL=routes.js.map