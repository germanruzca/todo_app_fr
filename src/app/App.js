import { ThemeProvider } from "styled-components";
import React from "react";

import { theme } from "../style/theme";
import GlobalStyle from "../style/Global";

import logo from '../assets/logo.png'

import { Button } from "../components";


function App() {
  return (
    <ThemeProvider theme={theme}>
		    <GlobalStyle/>
		    <div>
								<img src={logo} width={1000} height={500}/>
		    </div>
    </ThemeProvider>
  );
}

export default App;
