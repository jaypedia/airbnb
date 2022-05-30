import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
