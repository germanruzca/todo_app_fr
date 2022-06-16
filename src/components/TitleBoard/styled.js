import styled from 'styled-components';

export const TitleBoard = styled.div`
		display: flex;
		width: 100%;
		height: fit-content;
		align-items: center;
		margin: 0 155px;
		
		> a {
				font-size: 25px;
		}
`;

export const Title = styled.h1`
		font-size: 35px;
		font-family: ${props => props.theme.fontFamily.primary};
		margin: 0 10px;
`;