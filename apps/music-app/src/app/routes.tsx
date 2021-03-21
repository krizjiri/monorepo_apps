import { HomePage } from 'apps/music-app/src/app/pages/HomePage';
import { DetailPage } from 'apps/music-app/src/app/pages/DetailPage';
import { RouteType } from 'libs/types/src/lib/types';

const routes: RouteType[] = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    exact: true,
  },
  { name: 'detail', path: '/music', component: DetailPage },
];

export { routes };
