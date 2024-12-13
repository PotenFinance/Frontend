import Status from '@components/common/Status';
import { BRAND_LOGO } from '@constants/logo';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { isFulfilledPlan } from '@utils/platform';
import { usePlanStore } from 'stores/usePlanStore';

interface IProps {
  platformId: number;
  setPlatformId: (value: number) => void;
}

function PlanTabs({ platformId, setPlatformId }: IProps) {
  const { color } = useTheme();

  const { plans } = usePlanStore();

  return (
    <Tabs>
      {plans.map(v => (
        <Tab key={v.platformId} onClick={() => setPlatformId(v.platformId)}>
          {
            BRAND_LOGO({
              width: 40,
              height: 40,
              color: v.platformId !== platformId ? color.base.gray.base : undefined,
            })['small'][v.platformId]
          }
          <Status status={isFulfilledPlan(v) ? 'success' : 'error'} />
        </Tab>
      ))}
    </Tabs>
  );
}

export default PlanTabs;

const Tabs = styled.ul`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  border-top: 0.3px solid ${({ theme }) => theme.color.base.black};
  border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
`;

const Tab = styled.li`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
