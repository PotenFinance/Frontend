import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';
import Status, { TStatus } from '@components/common/Status';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IPlan, usePlanStore } from 'stores/usePlanStore';

interface IProps {
  setPlatformId: (value: number) => void;
  getServiceStatus: (plan: IPlan) => TStatus;
}

function PlanTabs({ setPlatformId, getServiceStatus }: IProps) {
  const { color } = useTheme();

  const { plans } = usePlanStore();

  return (
    <Tabs>
      {plans.map(v => (
        <Tab key={v.platformId} onClick={() => setPlatformId(v.platformId)}>
          <SpotifySmallLogo width={40} height={40} color={color.base.gray.base} />
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
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
