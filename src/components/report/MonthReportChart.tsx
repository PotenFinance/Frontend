import styled from '@emotion/styled';
import BarChart from '../common/chart/BarChart';

function MonthReportChart() {
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
            <span>V</span>
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
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
  }
  span {
  }
`;

const MonthPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
  & > p {
  }
  & > span {
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 2px;
    p {
      span {
      }
    }
  }
`;
