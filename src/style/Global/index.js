import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: unset;
    background-color: #fafafa;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;