import styled from 'styled-components'

export const ListCard = styled.div`
		width: 367px;
		height: fit-content;
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
		
		svg {
				margin: 0 5px;
		}
		p {
				margin: 0;
		}
`;

export const TaskCards = styled.div`
			div {
					margin: 15px 0;
			}
`;