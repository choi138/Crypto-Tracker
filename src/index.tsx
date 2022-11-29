import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components';
import { theme } from "./style/theme"
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
