import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./style/GlobalStyle";
import { useRecoilValue } from "recoil";
import { themeState } from "./atom";
import { DarkTheme, LightTheme } from "./style/theme";

function App() {
  const isDark = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;