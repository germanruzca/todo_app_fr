import React from 'react';
import { CustomInput, CustomInputLabel, CustomInputValue } from './styled'

const Component = ({placeholder, labelInput, inputType}) => {
		return (
			<CustomInput>
					<CustomInputLabel>{labelInput}</CustomInputLabel>
					<CustomInputValue placeholder={placeholder} type={inputType}/>
			</CustomInput>
		);
}

export { Component as CustomInput };
export default Component;