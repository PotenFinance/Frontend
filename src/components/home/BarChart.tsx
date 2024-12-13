import styled from '@emotion/styled';

interface IProps {
  data: { [key: number | string]: number };
  containerBaseValue: number;
  statusBaseValue: number;
}

function BarChart({ data, containerBaseValue, statusBaseValue }: IProps) {
  const CONTAINER_HEIGHT = 104;
  const percent = CONTAINER_HEIGHT / containerBaseValue;

  // 전월보다 당월 높은경우 - 초과/부정
  // 전월보다 당월이 낮은경우 - 절약/긍정
  // 전월과 당월 동일한 경우 - 유지

  return (
    <Chart>
      {Object.entries(data).map(([key, value]) => {
        return (
          <BarWrap key={key}>
            <BarContainer height={CONTAINER_HEIGHT}>
              {/* TODO: 추후 수정 - 전월 지출, 당월 지출값 비교 */}
              <Bar
                height={value * percent}
                status={
                  value > statusBaseValue
                    ? 'negavite'
                    : value < statusBaseValue
                    ? 'positive'
                    : 'neutral'
                }
              >
                <BarValue>{value.toLocaleString()}</BarValue>
              </Bar>
            </BarContainer>
            <Label>{key}월</Label>
          </BarWrap>
        );
      })}
    </Chart>
  );
}

export default BarChart;

const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const BarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const BarContainer = styled.div<{ height: number }>`
  width: 28px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: end;
`;

const Bar = styled.div<{ height: number; status: 'neutral' | 'positive' | 'negavite' }>`
  width: 100%;
  height: ${({ height }) => height}px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme, status }) =>
    status === 'neutral'
      ? theme.color.theme.neutral
      : status === 'positive'
      ? theme.color.theme.positive
      : theme.color.theme.negavite};
  display: flex;
  align-items: center;
  overflow: auto;
`;

const BarValue = styled.span`
  color: ${({ theme }) => theme.color.base.white};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin: 0 auto;
  transform: rotate(180deg);
  transform-origin: center;
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
`;
