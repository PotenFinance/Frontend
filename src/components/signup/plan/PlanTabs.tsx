import Status, { TStatus } from '@components/common/Status';
import { BRAND_LOGO } from '@constants/logo';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { usePlanStore } from 'stores/usePlanStore';

interface IProps {
  platformId: string;
  setPlatformId: (value: string) => void;
  getServiceStatus: (plan: ISignupPlatform) => TStatus;
}

function PlanTabs({ platformId, setPlatformId, getServiceStatus }: IProps) {
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
          <Status status={getServiceStatus(v)} />
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
