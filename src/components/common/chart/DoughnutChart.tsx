import styled from '@emotion/styled';

function DoughnutChart() {
  return (
    <Wrap>
      <Doughnut>파이</Doughnut>
      <LegendList>
        <LegendItem>
          <div>
            <LegendBar color="red" />
            <span>OTT</span>
          </div>
          <span>39,000원</span>
        </LegendItem>
      </LegendList>
    </Wrap>
  );
}

export default DoughnutChart;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Doughnut = styled.div``;

const LegendList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LegendItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  & > span {
  }
`;

const LegendBar = styled.div<{ color?: string }>`
  width: 4px;
  height: 16px;
  border-radius: 2px;
  background-color: ${({ color }) => color};
`;
