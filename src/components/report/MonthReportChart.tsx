import ArrowDown from '@assets/icons/arrow/ArrowDown';
import ArrowUp from '@assets/icons/arrow/ArrowUp';
import BarChart from '@components/common/chart/BarChart';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMonth } from '@utils/date';

interface IProps {
  data: { [key: number]: IReport };
  budget: number;
}

function MonthReportChart({ data, budget }: IProps) {
  const { color } = useTheme();

  const month = getMonth();
  const totalCost = data[month].total_cost;
  const costGap = totalCost - data[month - 1].total_cost;

  return (
    <Wrap>
      <FlexWrap>
        <TitleWrap>
          <h1>월별 구독 내역</h1>
          <span>월 예산 {budget.toLocaleString()}원</span>
        </TitleWrap>
        <MonthPriceWrap status={costGap ? (costGap > 0 ? 'negavite' : 'positive') : undefined}>
          <p>{month}월</p>
          <span>{totalCost.toLocaleString()}원</span>
          <div>
            {costGap ? (
              <p>
                전월대비 <span>{Math.abs(costGap).toLocaleString()}원</span>
              </p>
            ) : (
              <p>전월과 동일</p>
            )}
            {costGap && costGap > 0 ? (
              <ArrowUp color={color.theme.negavite} />
            ) : (
              <ArrowDown color={color.theme.positive} />
            )}
          </div>
        </MonthPriceWrap>
      </FlexWrap>
      <BarChart data={data} containerBaseValue={budget} statusBaseValue={totalCost} />
    </Wrap>
  );
}

export default MonthReportChart;

const Wrap = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
    line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
  }
  span {
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
  }
`;

const MonthPriceWrap = styled.div<{ status?: 'negavite' | 'positive' }>`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
  & > p {
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
  }
  & > span {
    color: ${({ theme, status }) =>
      status === 'negavite'
        ? theme.color.theme.negavite
        : status === 'positive'
        ? theme.color.theme.positive
        : theme.color.base.gray.base};
    font-family: ${({ theme }) => theme.typography.body_1.fontFamily};
    font-weight: ${({ theme }) =>
      (theme.typography.body_1.fontWeight as { [key: string]: number }).bold};
    font-size: ${({ theme }) => theme.typography.body_1.fontSize};
    line-height: ${({ theme }) => theme.typography.body_1.lineHeight};
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 2px;
    font-family: ${({ theme }) => theme.typography.title_4.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_4.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_4.fontSize};
    line-height: ${({ theme }) => theme.typography.title_4.lineHeight};
    p {
      span {
        color: ${({ theme, status }) =>
          status === 'negavite'
            ? theme.color.theme.negavite
            : status === 'positive'
            ? theme.color.theme.positive
            : theme.color.base.gray.base};
      }
    }
  }
`;
