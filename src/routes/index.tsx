import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import loader from '../hoc/loader';

import {
  Login,
  NotFound,
  Test,
  SignUp,
  Home,
  Admin,
  AddMovie,
  Discussions,
} from '../pages';

const PagesRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/cadastro" component={SignUp} />
    <Route path="/not-found" component={NotFound} />
    <PrivateRoute path="/pagina-inicial" component={loader(Home)} />
    <PrivateRoute path="/test" component={Test} />
    <PrivateRoute path="/admin" component={loader(Admin)} isAdmin />
    <PrivateRoute path="/adicionar-filme" component={AddMovie} />
    <PrivateRoute path="/discussoes" component={Discussions} />
    <Redirect exact from="/" to="/login" />
    <Route>
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default PagesRoutes;
