import DoughnutChart from '@components/common/chart/DoughnutChart';
import styled from '@emotion/styled';

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
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
  line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.heading_1.letterSpacing};
`;
