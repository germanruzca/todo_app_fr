import styled from 'styled-components';

export const SignUp = styled.div`
		width: fit-content;
		height: fit-content;
		box-sizing: border-box;
		padding: 15px 30px;
		color: red;
		border: 2px solid  ${props => props.theme.colors.gray};
		border-radius: 10px;
		font-family: ${props => props.theme.fontFamily.primary};
		display: flex;
		flex-direction: column;
		align-items: center;
`;

export const Title = styled.p`
		font-size: 25px;
		color: ${props => props.theme.colors.black};
		text-align: center;
		margin: 0;
		font-weight: 700;
`;

export const Description = styled.p`
		font-size: 15px;
  color: ${props => props.theme.colors.black};
		text-align: center;
		
		span {
				color:${props => props.theme.colors.colorLogo};
		}
`;

export const Fields = styled.div`
		width: 100%;
		display: flex;
		> div {
				width: 50%;
				margin: 10px;
				> div {
						margin-top: 20px	;
				}
		}
`;

export const ButtonCotainer = styled.div`
		display: flex;
		justify-content: center;
		margin-top: 50px;
		margin-bottom: 20px;
`;

export const LoginOptions = styled.p`
		font-family: ${props => props.theme.fontFamily.primary};
  color: ${props => props.theme.colors.black};
		font-size: 15px;
`;