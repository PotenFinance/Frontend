import styled from '@emotion/styled';
import Doughnut from './Doughnut';
import { useTheme } from '@emotion/react';

function DoughnutChart() {
  const { color } = useTheme();

  const data = [
    { id: 'ott', name: 'OTT', value: 39000, color: color.theme.ott },
    { id: 'music', name: '음악', value: 11900, color: color.theme.music },
    { id: 'work', name: '작업', value: 30000, color: color.theme.work },
    { id: 'game', name: '게임', value: 9900, color: color.theme.game },
    { id: 'daily', name: '일상', value: 18000, color: color.theme.daily },
    { id: 'etc', name: '기타', value: 2800, color: color.theme.etc },
  ];

  return (
    <Wrap>
      <Doughnut data={data} />
      <LegendList>
        {data.map(v => (
          <LegendItem key={v.id}>
            <div>
              <LegendBar color={v.color} />
              <span>{v.name}</span>
            </div>
            <span>{v.value.toLocaleString()}원</span>
          </LegendItem>
        ))}
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

const LegendList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LegendItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      font-family: ${({ theme }) => theme.typography.body_1.fontFamily};
      font-weight: ${({ theme }) => theme.typography.body_1.fontWeight.bold};
      font-size: ${({ theme }) => theme.typography.body_1.fontSize};
      line-height: ${({ theme }) => theme.typography.body_1.lineHeight};
    }
  }
  & > span {
    font-family: ${({ theme }) => theme.typography.body_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.body_1.fontWeight.default};
    font-size: ${({ theme }) => theme.typography.body_1.fontSize};
    line-height: ${({ theme }) => theme.typography.body_1.lineHeight};
  }
`;

const LegendBar = styled.div<{ color?: string }>`
  width: 4px;
  height: 16px;
  border-radius: 2px;
  background-color: ${({ color }) => color};
`;
