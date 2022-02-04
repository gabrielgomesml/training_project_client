import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import GlobalStyles from './assets/styles/global';
import PagesRoutes from './routes';
import { AuthProvider } from './hooks/auth';

const App = (): React.ReactElement => (
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PagesRoutes />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  </Router>
);

export default App;
