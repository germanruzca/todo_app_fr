import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "../style/theme";
import GlobalStyle from "../style/Global";

import { Button } from "../components";


function App() {
  return (
    <ThemeProvider theme={theme}>
		    <GlobalStyle/>
		    <Button/>
    </ThemeProvider>
  );
}

export default App;
