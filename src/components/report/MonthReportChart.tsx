import ArrowDown from '@assets/icons/arrow/ArrowDown';
import BarChart from '@components/common/chart/BarChart';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

interface IProps {
  data: { [key: number]: IReport };
  budget: number;
}

function MonthReportChart({ data, budget }: IProps) {
  const { color } = useTheme();

  const month = new Date().getMonth() + 1;

  return (
    <Wrap>
      <FlexWrap>
        <TitleWrap>
          <h1>월별 구독 내역</h1>
          <span>월 예산 {budget.toLocaleString()}원</span>
        </TitleWrap>
        <MonthPriceWrap>
          <p>{month}월</p>
          <span>{data[month].total_cost.toLocaleString()}원</span>
          <div>
            <p>
              전월대비{' '}
              <span>
                {(data[month].total_cost - data[new Date().getMonth()].total_cost).toLocaleString()}
                원
              </span>
            </p>
            <ArrowDown color={color.theme.positive} />
          </div>
        </MonthPriceWrap>
      </FlexWrap>
      <BarChart
        data={data}
        containerBaseValue={budget}
        statusBaseValue={data[new Date().getMonth() + 1].total_cost}
      />
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
