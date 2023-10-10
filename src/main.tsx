import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/styled.ts';
import { GlobalStyle } from './style/globalstyle.style.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
