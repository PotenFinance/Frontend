import ArrowDown from '@assets/icons/arrow/ArrowDown';
import BarChart from '@components/common/chart/BarChart';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

function MonthReportChart() {
  const { color } = useTheme();

  const data = {
    1: 100000,
    2: 30000,
    3: 50000,
    4: 100000,
    5: 102200,
    6: 50000,
    7: 200000,
    8: 30000,
    9: 50000,
    10: 160000,
    11: 30000,
    12: 102200,
  };

  const budgetValue = 200000;
  const currentValue = 102200;

  return (
    <Wrap>
      <FlexWrap>
        <TitleWrap>
          <h1>월별 구독 내역</h1>
          <span>월 예산 200,000원</span>
        </TitleWrap>
        <MonthPriceWrap>
          <p>12월</p>
          <span>102,200원</span>
          <div>
            <p>
              전월대비 <span>17,890원</span>
            </p>
            <ArrowDown color={color.theme.positive} />
          </div>
        </MonthPriceWrap>
      </FlexWrap>
      <BarChart data={data} containerBaseValue={budgetValue} statusBaseValue={currentValue} />
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

const MonthPriceWrap = styled.div`
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
    color: ${({ theme }) => theme.color.theme.positive};
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
        color: ${({ theme }) => theme.color.theme.positive};
      }
    }
  }
`;
