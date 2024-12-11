import styled from '@emotion/styled';
import SectionLayout from './SectionLayout';
import { TypographySize } from '@styles/theme';

/** 총 구독 비용 */
export default function TotalSpending() {
  const year = new Date().getFullYear();
  return (
    <SectionLayout heading="총 구독 비용">
      <InnerWrapper>
        <ChartContainer>차트 영역</ChartContainer>
        <ChartDesc>
          <CurrentYear>{`${year}년`}</CurrentYear>
          <Amount>{`총 770,800원`}</Amount>
          {/* 추후 추가 */}
          {/* <li>
            <ul>
              <AmountDifference>{`-16,352원`}</AmountDifference>
              <li>{`전월대비 16%+아이콘`}</li>
            </ul>
          </li> */}
        </ChartDesc>
      </InnerWrapper>
    </SectionLayout>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  margin-top: 21px;
  justify-content: space-between;
`;

const ChartContainer = styled.div``;

const ChartDesc = styled.ul`
  border: solid 1px red;
  text-align: right;

  & li + li {
    margin-top: 6px;
  }
`;

const CurrentYear = styled.li`
  list-style: disc;
  list-style-position: inside;
  font-size: ${({ theme }) => theme.typography.sub_1.fontSize};
  font-weight: ${({ theme }) => theme.typography.sub_1.fontWeight};
`;

const Amount = styled.li`
  font-family: ${({ theme }) => theme.typography.display_3.fontFamily};
  font-size: ${({ theme }) => (theme.typography.display_3.fontSize as TypographySize).default};
  font-weight: ${({ theme }) => theme.typography.display_3.fontWeight};
`;

/** 전월대비 지출금액 */
const AmountDifference = styled.li``;
/** 전월대비 상승/하락률 */
const DifferenceRate = styled.li``;
