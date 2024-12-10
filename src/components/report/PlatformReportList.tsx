import styled from '@emotion/styled';

function PlatformReportList() {
  return (
    <List>
      <Item>
        <TagWrap>
          <Tag bgColor="red" textColor="white">
            OTT
          </Tag>
          <Tag bgColor="yellow">같이구독</Tag>
        </TagWrap>
        <InfoWrap>
          <div>
            <span>넷플릭스</span>
            <span>8,940원 / 월</span>
          </div>
          <div>
            <span>프리미엄 요금제</span>
            <span>
              총 지출 <b>62,580원 / 7개월</b>
            </span>
          </div>
        </InfoWrap>
      </Item>
    </List>
  );
}

export default PlatformReportList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 0.3px solid black;
  border-bottom: 0.3px solid black;
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Tag = styled.div<{ bgColor?: string; textColor?: string }>`
  width: 24px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  font-family: ${({ theme }) => theme.typography.title_4.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_4.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_4.fontSize};
  line-height: ${({ theme }) => theme.typography.title_4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title_4.letterSpacing};
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    display: flex;
    justify-content: space-between;
    &:first-of-type {
      font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_1.fontSize};
      line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
      letter-spacing: ${({ theme }) => theme.typography.title_1.letterSpacing};
    }
    &:last-of-type {
      font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_2.fontSize};
      line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
      letter-spacing: ${({ theme }) => theme.typography.title_2.letterSpacing};
    }
  }
`;
