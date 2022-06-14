import styled from 'styled-components';

export const CustomInput = styled.div`
		height: fit-content;
`;

export const CustomInputLabel = styled.label`
		color: ${props => props.theme.colors.black};
		font-family: ${props => props.theme.fontFamily.primary};
		font-size: 15px;
		margin: 0 0 20px 2px;
`;

export const CustomInputValue = styled.input`
		width: 100%;
		height: 50px;
		padding: 5px;
		border-radius: 5px;
		border: 1px solid ${props => props.theme.colors.gray};
		margin-top: 5px;
		font-size: 16px;
		outline: none;
		box-sizing: border-box;
`;