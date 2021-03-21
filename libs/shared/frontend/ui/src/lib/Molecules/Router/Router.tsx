import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from '../../..';
import { RouteType } from '@monorepo-test/shared/types';

type Props = {
  routes: RouteType[];
};

const Router: React.FC<Props> = ({ routes }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.name} {...route} />
      ))}
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export { Router };
