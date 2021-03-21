import { HomePage } from 'apps/movies-app/src/app/pages/HomePage';
import { DetailPage } from 'apps/movies-app/src/app/pages/DetailPage';
import { RouteType } from 'libs/types/src/lib/types';

const routes: RouteType[] = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    exact: true,
  },
  { name: 'detail', path: '/detail', component: DetailPage },
];

export { routes };
