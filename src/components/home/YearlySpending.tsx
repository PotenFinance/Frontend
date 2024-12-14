import styled from '@emotion/styled';
import SectionLayout from './SectionLayout';
import { TypographySize } from '@styles/theme';
import BarChart from './BarChart';
import { getMonth, getYear } from '@utils/date';
import { formatCost } from '@utils/home';
import ArrowDown from '@assets/icons/arrow/ArrowDown';
import { useTheme } from '@emotion/react';
import ArrowUp from '@assets/icons/arrow/ArrowUp';

/** 연간 구독 비용 */
export default function YearlySpending(data: TAnnualSubsSpending) {
  const theme = useTheme();
  const {
    costChange,
    costChangeAmount,
    currentMonthCost,
    lastMonthCost,
    twoMonthsBeforeCost,
    threeMonthsBeforeCost,
    totalCost,
  } = data;

  const year = getYear();
  const month = getMonth();

  const CHART_DATA = {
    [month - 3]: threeMonthsBeforeCost,
    [month - 2]: twoMonthsBeforeCost,
    [month - 1]: lastMonthCost,
    [month]: currentMonthCost,
  };

  const formattedCost = formatCost(costChangeAmount);

  return (
    <SectionLayout heading="연간 구독 비용">
      <InnerWrapper>
        <ChartContainer>
          <BarChart
            data={CHART_DATA}
            containerBaseValue={data.userBudget}
            statusBaseValue={currentMonthCost}
          />
        </ChartContainer>
        <ChartDesc>
          <CurrentYear>{`${year}년`}</CurrentYear>
          <Amount>{`총 ${totalCost.toLocaleString()}원`}</Amount>
          <li>
            <ul>
              <AmountDifference costChange={costChange}>{`${formattedCost}원`}</AmountDifference>
              <DifferenceRate>
                <span>{`전월대비 `}</span>
                {`${costChange}%`}
                {costChange < 0 ? (
                  <ArrowDown color={theme.color.theme.positive} />
                ) : costChange > 0 ? (
                  <ArrowUp color={theme.color.theme.negavite} />
                ) : null}
              </DifferenceRate>
            </ul>
          </li>
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
const AmountDifference = styled.li<{ costChange: number }>`
  color: ${({ theme, costChange }) =>
    costChange > 0
      ? theme.color.theme.negavite
      : costChange < 0
      ? theme.color.theme.positive
      : theme.color.theme.neutral};
`;
/** 전월대비 상승/하락률 */
const DifferenceRate = styled.li`
  font-size: ${({ theme }) => theme.typography.title_4.fontSize};

  & span {
    color: ${({ theme }) => theme.color.base.gray.base};
  }
`;
