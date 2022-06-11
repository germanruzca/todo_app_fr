import styled from 'styled-components';

export const Button = styled.button`
		width: 100px;
		height: 50px;
		border-radius: 10px;
		border: 1px solid ${props => props.theme.colors.primary};
		cursor: pointer;
		background-color: ${props => props.theme.colors.primary};
		
		&:hover {
				background-color: ${props => props.theme.colors.squares};
		}
`
