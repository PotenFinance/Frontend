import styled from '@emotion/styled';
import DoughnutChart from '../common/chart/DoughnutChart';

function PlatformReportChart() {
  return (
    <Wrap>
      <Title>구독 포트폴리오</Title>
      <DoughnutChart />
    </Wrap>
  );
}

export default PlatformReportChart;

const Wrap = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1``;
