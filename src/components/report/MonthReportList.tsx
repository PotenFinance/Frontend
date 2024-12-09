import styled from '@emotion/styled';

function MonthReportList() {
  return (
    <List>
      <Item>
        <InfoWrap>
          <p>2024년 1월</p>
          <span>
            구독서비스 <b>3</b>
          </span>
          <div>
            <p>총 지출</p>
            <span>89,000원</span>
          </div>
        </InfoWrap>
        <SubIconList>
          <li>아이콘</li>
        </SubIconList>
      </Item>
    </List>
  );
}

export default MonthReportList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-top: 0.3px solid black;
  border-bottom: 0.3px solid black;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > p {
  }
  & > span {
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5em;
    p {
    }
    span {
    }
  }
`;

const SubIconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;
