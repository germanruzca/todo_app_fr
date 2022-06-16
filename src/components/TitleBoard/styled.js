import styled from 'styled-components';

export const TitleBoard = styled.div`
		display: flex;
		height: fit-content;
		align-items: center;
		> a {
				font-size: 30px;
				width: 30px;
				height: 30px;
		}
`;

export const Title = styled.h1`
		font-size: 35px;
		font-family: ${props => props.theme.fontFamily.primary};
		margin: 0 10px;
`;