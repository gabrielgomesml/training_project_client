import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../hooks/auth';
import api from '../services/api';
import { Navbar } from '../components';

interface RouteProps extends ReactRouteProps {
  isAdmin?: boolean;
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({
  isAdmin,
  component: Component,
  ...rest
}) => {
  const token = Cookies.get('@training-project:token');
  let user = Cookies.get('@training-project:user');
  if (user) {
    user = JSON.parse(user);
  }
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
        if (token && signOut) {
          fetch(`${api}verify-token`, requestOptions).catch(() => {
            signOut();
          });
        }
        if (isAdmin) {
          return token && user.role === 1 ? (
            <>
              <Navbar role={user.role} photo={user.photo_address} />
              <Component />
            </>
          ) : (
            <Redirect
              to={{ pathname: '/pagina-inicial', state: { from: location } }}
            />
          );
        }

        return token ? (
          <>
            <Navbar role={user.role} photo={user.photo_address} />
            <Component />
          </>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
