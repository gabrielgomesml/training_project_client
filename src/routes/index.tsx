import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import { Login } from '../pages';

const PagesRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/teste" component={Login} />
    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default PagesRoutes;
