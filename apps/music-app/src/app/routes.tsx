import { RouteType } from '@monorepo-test/shared/types';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';

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
