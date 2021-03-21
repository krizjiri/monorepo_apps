import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
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