import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './assets/styles/theme';
import GlobalStyles from './assets/styles/global';
import PagesRoutes from './routes';
import { AuthProvider } from './hooks/auth';
import { SocketsProvider } from './hooks/socket';
import { store } from './store';

const App = (): React.ReactElement => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SocketsProvider>
          <Provider store={store}>
            <PagesRoutes />
          </Provider>
        </SocketsProvider>
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  </Router>
);

export default App;
