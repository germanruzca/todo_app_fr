import styled from 'styled-components';


export const ListBoard = styled.div`
		display: flex;
		flex-direction: column;
		width: 650px;
`;

export const ListBoardContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
  border: 5px solid ${props => props.theme.colors.gray};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const ListBoardHeader = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 10px;
`;

export const ListBoardAdd = styled.div`
		width: 120px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		> svg {
				margin-right: 5px;
		}
  font-family:  ${props => props.theme.fontFamily.primary};
  cursor: pointer;
`;

export const ListBoardTitle = styled.p`
		font-size:20px;
		font-weight: 700;
		font-family:  ${props => props.theme.fontFamily.primary};
		margin: 0;
`;