import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
		html {
				scrollbar-track-color: red;
				scrollbar-base-color: red;
				scroll
		}
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