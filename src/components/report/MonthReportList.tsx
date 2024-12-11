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
  padding: 12px 16px;
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
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
  }
  & > span {
    font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_3.fontSize};
    line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5em;
    p {
      font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_3.fontSize};
      line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
    }
    span {
      font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_2.fontSize};
      line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
    }
  }
`;

const SubIconList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;
