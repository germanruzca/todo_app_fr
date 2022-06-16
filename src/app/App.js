import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "../style/theme";
import GlobalStyle from "../style/Global";

import logo from '../assets/logo.png'

import { MainRouter } from '../views/'

function App() {
  return (
    <ThemeProvider theme={theme}>
		    <GlobalStyle/>
		    <MainRouter/>
    </ThemeProvider>
  );
}

export default App;
