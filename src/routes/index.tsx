import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import { Login, NotFound, Test, SignUp, Home, Admin } from '../pages';

const PagesRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/cadastro" component={SignUp} />
    <Route path="/not-found" component={NotFound} />
    <PrivateRoute path="/pagina-inicial" component={Home} />
    <PrivateRoute path="/test" component={Test} />
    <PrivateRoute path="/admin" component={Admin} isAdmin />
    <Redirect exact from="/" to="/login" />
    <Route>
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default PagesRoutes;
