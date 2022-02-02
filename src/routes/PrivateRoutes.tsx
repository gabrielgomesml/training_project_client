import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import api from '../services/api';

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('@training-project:token');
  const { signOut } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        api.post('/verify-token').catch(() => {
          signOut();
        });
        return token ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
