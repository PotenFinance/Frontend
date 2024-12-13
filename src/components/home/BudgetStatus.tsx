import styled from '@emotion/styled';
import SectionLayout from './SectionLayout';
import GaugeChart from '@components/common/chart/GaugeChart';

/** 이번달 예산 현황 */
export default function BudgetStatus() {
  const Heading = (
    <>
      이번달 예산을 <Highlight>초과</Highlight>했어요.
    </>
  );

  return (
    <SectionLayout heading={Heading}>
      <h3 className="a11y-hidden">이번달 예산 현황</h3>
      <Overview>
        <OverviewList>
          <li>
            <Budget>설정한 예산</Budget>
            <Amount>{`100,000원`}</Amount>
          </li>
          <li>
            <Overrun>초과한 금액</Overrun>
            <OverrunAmount>{`+2,200원`}</OverrunAmount>
          </li>
        </OverviewList>
      </Overview>
      <ChartContainer>
        <GaugeChart width={390} />
      </ChartContainer>
    </SectionLayout>
  );
}

const Overview = styled.div`
  height: 76px;
  border-radius: 12px;
  margin-top: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.base.gray._e};
`;

const OverviewList = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    display: flex;
    flex-direction: column;
  }
`;

const Budget = styled.span`
  font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
  font-size: ${({ theme }) => theme.typography.title_2.fontSize};
  color: ${({ theme }) => theme.color.base.gray._5};
`;

const Amount = styled.span`
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
  margin-top: 8px;
  font-weight: 700;
`;

const Overrun = styled(Budget)`
  text-align: right;
`;

const OverrunAmount = styled(Amount)`
  text-align: right;
  color: ${({ theme }) => theme.color.theme.negavite};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.theme.negavite};
`;

const ChartContainer = styled.div``;
