import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import GlobalStyles from './assets/styles/global';
import PagesRoutes from './routes';
import AppProvider from './hooks';

const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <PagesRoutes />
    </AppProvider>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
