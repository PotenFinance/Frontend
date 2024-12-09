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
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
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
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    &:first-of-type {
    }
    &:last-of-type {
    }
  }
`;
