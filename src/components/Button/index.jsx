import React from "react";
import { Button } from './styled';

const Component = ({text, colorButton}) => {
		return (
				<Button colorButton={colorButton}>
						{text}
				</Button>
		)
}

export { Component as Button };
export default Component;
