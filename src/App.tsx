import './styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import GlobalStyles from './assets/styles/global';
import PagesRoutes from './routes';

const App = (): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <h1>Training Project</h1>
    <PagesRoutes />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
