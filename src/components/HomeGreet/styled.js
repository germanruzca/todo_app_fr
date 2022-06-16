import styled from 'styled-components';

export const HomeGreet = styled.div`
		width: 418px;
		height: 600px;
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
		height: 450px;
`;

export const Image = styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
`;