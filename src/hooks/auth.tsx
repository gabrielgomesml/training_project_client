// Alternativa: Usar cookies de sessão

import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import api from '../services/api';

interface User {
  id: string;
}

interface AuthState {
  user?: User;
  token?: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user?: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@training-project:user');
    const token = localStorage.getItem('@training-project:token');

    if (user && token) {
      return { user: JSON.parse(user), token };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(`${api}user-auth`, requestOptions);

    const signInData = await response.json();
    const { user, token } = signInData;

    localStorage.setItem('@training-project:user', JSON.stringify(user));
    localStorage.setItem('@training-project:token', token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@training-project:user');
    localStorage.removeItem('@training-project:token');

    setData({});
  }, []);

  const value = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
    }),
    [data.user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
