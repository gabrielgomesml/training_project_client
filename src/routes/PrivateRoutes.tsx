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
        const requestOptions = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        };
        if (token) {
          fetch(`${api}verify-token`, requestOptions).catch(() => {
            signOut();
          });
        }
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
