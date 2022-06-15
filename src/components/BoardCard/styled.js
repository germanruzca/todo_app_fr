import styled from 'styled-components';

export const BoardCard = styled.div`
		width: 605px;
		height: 86px;
		border-radius: 10px;
		background-color: ${props => props.theme.colors.boardsCardColor};
		border: 2px solid ${props => props.theme.colors.boardsCardBorderColor};
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		box-sizing: border-box;
`;

export const BoardCardTitle = styled.input`
		font-size: 20px;
		color: ${props => props.theme.colors.black};
		font-family: ${props => props.theme.fontFamily.primary};
		font-weight: 700;
		margin: 0;
		outline: none;
		border: 0 solid transparent;
		background-color: transparent;
		padding: 0;
		width: 450px;
`

export const BoardCardTask = styled.p`
		font-size: 16px;
		color: ${props => props.theme.colors.black};
		font-family: ${props => props.theme.fontFamily.primary};
		margin: 0;
`;

export const BoardCardInfo = styled.div`
		display: flex;
		flex-direction: column;
		> p {
				margin-bottom: 5px;
		}
`;

export const BoardCardIcons	= styled.div`
		display: flex;
		font-size: 30px;
		
		> svg {
				margin: 0 10px;
				cursor: pointer;
		}
		
		> svg:first-child {
				transform: rotate(45deg);
				:hover {
						color: ${props => props.theme.colors.rede2};
						transition: all 0.3s ease-in-out;
    }
		}
		
		>svg:last-child {
    :hover {
      color: ${props => props.theme.colors.blue1960};
      transition: all 0.3s ease-in-out;
    }
		}
`;