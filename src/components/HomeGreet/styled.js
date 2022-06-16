import styled from 'styled-components';

export const HomeGreet = styled.div`
		width: 518px;
		height: 700px;
		border: 1px solid black;
		box-sizing: border-box;
`;

export const Greeting = styled.h1`
		font-size: 45px;
		margin: 0;
		font-weight: 700;
		font-family: ${props => props.theme.fontFamily.primary};
`;

export const ImageContainer = styled.div`
		width: fit-content;
		height: 630px;
`;

export const Image = styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
`;