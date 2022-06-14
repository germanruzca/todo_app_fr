import styled from 'styled-components';

export const Button = styled.button`
		width: 200px;
		height: 45px;
		border-radius: 10px;
		border: 1px solid ${props => props.theme.colors.rede2};
		cursor: pointer;
		background-color: ${props => props.theme.colors.rede2};
		font-size: 15px;
		font-family: 'Roboto', sans-serif;
		transition: all 0.3s ease-in-out;
		color: ${props => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		
		&:hover {
				background-color: ${props => props.theme.colors.redff6};
    border: 1px solid ${props => props.theme.colors.redff6};
		}
`
