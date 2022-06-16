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
  margin: 32px 0 80px 0px;
`;

export const TwoColumnsLayout = styled.div`
  display: grid;
  grid-template:
    "LeftColumn RightColumn" 100%
    / 250px calc(100% - 250px);
  width: 100%;
`;

export const LeftColumn = styled.div`
  grid-area: LeftColumn;
  padding-right: 16px;
`;

export const RightColumn = styled.div`
  grid-area: RightColumn;
  max-height: 100vh;
  overflow-y: auto;
`;

export const RightColumnNoOverflow = styled.div`
  grid-area: RightColumn;
  height: auto;
`;

export const MainColumn = styled.div`
  max-width: 1280px;
  width: 90%;
  min-width: 920px;
  margin: 1em auto 0;
`;

export const BucketList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  > div {
    margin-bottom: 20px;
    &:last-of-type {
      margin: 0;
    }
  }
`;

export const ContentStandarMargin = styled.div`
  margin: 1em auto;
  max-width: 1280px;
  min-width: 920px;
  width: 90%;
`;

export const AlternativeLayout = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 46px auto 100px;
`;

export const Badge = styled.span`
  background-color: ${props=> props.color};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.whitefff};
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px;
`;

export const GroupText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  span:first-of-type {
    font-weight: 900;
  }
  span:last-of-type {
    color: ${props => props.theme.colors.gray495};
  }
  button {
    font-size: 0.8rem;
    text-align: left;
  }
`;