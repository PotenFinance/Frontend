import styled from '@emotion/styled';
import SectionLayout from './SectionLayout';
import { TypographySize } from '@styles/theme';
import BarChart from './BarChart';

const dummyData = {
  // 1: 100000,
  // 2: 30000,
  // 3: 50000,
  // 4: 100000,
  // 5: 102200,
  // 6: 50000,
  // 7: 200000,
  // 8: 30000,
  9: 50000,
  10: 160000,
  11: 30000,
  12: 102200,
};

const budgetValue = 200000;
const currentValue = 102200;

/** 총 구독 비용 */
export default function TotalSpending() {
  const year = new Date().getFullYear();
  return (
    <SectionLayout heading="총 구독 비용">
      <InnerWrapper>
        <ChartContainer>
          <BarChart
            data={dummyData}
            containerBaseValue={budgetValue}
            statusBaseValue={currentValue}
          />
        </ChartContainer>
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
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
