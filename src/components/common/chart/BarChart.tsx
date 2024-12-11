import styled from '@emotion/styled';

interface IProps {
  data: { [key: number | string]: number };
  containerBaseValue: number;
  statusBaseValue: number;
}

function BarChart({ data, containerBaseValue, statusBaseValue }: IProps) {
  const containerHeight = 140;
  const percent = containerHeight / containerBaseValue;

  return (
    <Chart>
      {Object.entries(data).map(([key, value]) => {
        return (
          <BarWrap key={key}>
            <BarContainer height={containerHeight}>
              <Bar
                height={value * percent}
                status={
                  value > statusBaseValue
                    ? 'negavite'
                    : value < statusBaseValue
                    ? 'positive'
                    : 'neutral'
                }
              />
            </BarContainer>
            <Label>{key}</Label>
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
  width: 8px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: end;
  border-radius: 8px;
  border: 0.3px solid ${({ theme }) => theme.color.base.black};
`;

const Bar = styled.div<{ height: number; status: 'neutral' | 'positive' | 'negavite' }>`
  width: 100%;
  height: ${({ height }) => height}px;
  border-radius: 8px;
  background-color: ${({ theme, status }) =>
    status === 'neutral'
      ? theme.color.theme.neutral
      : status === 'positive'
      ? theme.color.theme.positive
      : theme.color.theme.negavite};
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title_3.letterSpacing};
`;
