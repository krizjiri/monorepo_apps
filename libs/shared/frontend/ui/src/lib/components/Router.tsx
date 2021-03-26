import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { RouteType } from '@monorepo-test/shared/types';
import { NoMatch } from '@monorepo-test/shared/frontend/ui';

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
