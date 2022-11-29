import React from "react";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools"
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;