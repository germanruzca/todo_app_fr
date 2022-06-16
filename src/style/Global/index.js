import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: unset;
    background-color: white;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;