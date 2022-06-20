import styled from 'styled-components'

export const ListCard = styled.div`
		width: fit-content;
		height: 500px;
		background-color: #F8F8F8;
		border: 5px solid ${props => props.colorList};
		border-radius: 10px;
		padding: 20px 30px;
		box-sizing: border-box;
`;

export const ListCardHeader = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
`;


export const ListCardTitle = styled.h1`
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
`;

export const ListCardAdd = styled.div`
		display: flex;
		align-items: center;
  font-family: 'Roboto', sans-serif;
		color: #848484;
		cursor: pointer;
  user-select: none;
		
		svg {
				margin: 0 5px;
		}
		p {
				margin: 0;
		}
`;

export const EmptyList = styled.div`
		width: 302px;
		display: flex;
		justify-content: center;
		height: 100px;
		font-family: ${props => props.theme.fontFamily.primary};
  user-select: none;
		
		h1 {
				font-size: 20px;
				margin: 0;
				color: ${props => props.theme.colors.gray};
		}
`

export const TaskCards = styled.div`
		height: 90%;
		overflow: scroll;
			div {
					margin: 15px 0;
			}
		::-webkit-scrollbar {
				display: none;
		}
`;