import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { BRAND_LOGO } from '@constants/logo';
import { PLATFORM_ENG_NAMES } from '@constants/index';

export default function ServiceCard(data: TSubscriptionDetail) {
  const theme = useTheme();

  const { platformId, platformName, planName, actualCost, renewalDaysLeft } = data;

  const platformEngName = PLATFORM_ENG_NAMES.find(platform => platform.id === platformId);

  return (
    <Card platform={platformEngName?.name}>
      <h4>
        <span className="a11y-hidden">{platformName}</span>
        {
          BRAND_LOGO({
            width: '100%',
            height: '100%',
            color: theme.color.base.white,
          })['large'][platformId]
        }
      </h4>
      <CardInnerWrapper>
        <PlanDesc>
          <Service>{platformName}</Service>
          <SubPlan>{planName}</SubPlan>
          <MonthlyPrice>{`${actualCost.toLocaleString()}원 / 1달`}</MonthlyPrice>
        </PlanDesc>
        <RemainingDateBadge platform={platformEngName?.name}>
          <span>{`D-${renewalDaysLeft}`}</span>
        </RemainingDateBadge>
      </CardInnerWrapper>
    </Card>
  );
}

const Card = styled.article<{ platform?: string }>`
  width: 168px;
  height: 228px;
  border-radius: 4px;
  padding: 14px;
  background-color: ${({ theme, platform }) =>
    platform ? theme.color.brand[platform] : theme.color.base.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlanDesc = styled.ul`
  color: ${({ theme }) => theme.color.base.white};

  & li + li {
    margin-top: 8px;
  }
`;

const Service = styled.li`
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
`;

const SubPlan = styled.li`
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
`;

const MonthlyPrice = styled.li`
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  opacity: 0.5;
`;

const CardInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

/** 구독 갱신 잔여일자 */
const RemainingDateBadge = styled.div<{ platform?: string }>`
  background-color: ${({ theme }) => theme.color.base.white};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
    color: ${({ theme, platform }) =>
      platform ? theme.color.brand[platform] : theme.color.base.black};
  }
`;
