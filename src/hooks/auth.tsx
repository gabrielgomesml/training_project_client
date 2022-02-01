import React, {
 createContext, useCallback, useState, useContext
} from 'react';
import api from '../services/api';

interface User {
  id: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@training-project:user');
    const token = localStorage.getItem('@training-project:token');

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      return { user: JSON.parse(user), token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/user-auth', { email, password });

    const { user, token } = response.data;

    localStorage.setItem('@training-project:user', JSON.stringify(user));
    localStorage.setItem('@training-project:token', token);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@training-project:user');
    localStorage.removeItem('@training-project:token');

    delete api.defaults.headers.common.Authorization;

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
