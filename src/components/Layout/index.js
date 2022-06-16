import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: inherit;
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily.primary};
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
		align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  margin: 30px 0 0 0;
`;

export const LayoutBoardView = styled.div`
		display: flex;
		flex-direction: column;
		margin: 30px 150px 0 150px;
		> div:nth-child(2) {
				margin: 0 0 15px 15px;
		}
`;

export const LayoutBoards = styled.div`
		display: flex;
		> div {
				margin: 0 10px;
		}
`;

export const LogInView = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30px 0 0 0;
`;