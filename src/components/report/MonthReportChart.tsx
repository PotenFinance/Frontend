import ArrowDown from '@assets/icons/arrow/ArrowDown';
import BarChart from '@components/common/chart/BarChart';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

function MonthReportChart() {
  const { color } = useTheme();

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
      <BarChart />
    </Wrap>
  );
}

export default MonthReportChart;

const Wrap = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
    line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.heading_1.letterSpacing};
  }
  span {
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.title_1.letterSpacing};
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
    letter-spacing: ${({ theme }) => theme.typography.title_1.letterSpacing};
  }
  & > span {
    color: ${({ theme }) => theme.color.theme.positive};
    font-family: ${({ theme }) => theme.typography.body_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.body_1.fontWeight.bold};
    font-size: ${({ theme }) => theme.typography.body_1.fontSize};
    line-height: ${({ theme }) => theme.typography.body_1.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body_1.letterSpacing};
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 2px;
    font-family: ${({ theme }) => theme.typography.title_4.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_4.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_4.fontSize};
    line-height: ${({ theme }) => theme.typography.title_4.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.title_4.letterSpacing};
    p {
      span {
        color: ${({ theme }) => theme.color.theme.positive};
      }
    }
  }
`;
