import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import { Login, Test } from '../pages';

const PagesRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/test" component={Test} />
    <Route>
      <Redirect to="/login" />
    </Route>
  </Switch>
);

export default PagesRoutes;
