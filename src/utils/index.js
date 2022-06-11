import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import React from "react";

export const TemplateStyled = (Story) => (
		<ThemeProvider theme={theme}>
				<Story />
		</ThemeProvider>
);
