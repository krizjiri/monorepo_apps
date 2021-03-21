import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from 'libs/ui/src/lib/Molecules/NoMatch/NoMatch';
import { RouteType } from 'libs/types/src/lib/types';

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
