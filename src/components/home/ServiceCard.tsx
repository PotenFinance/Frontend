import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import NetflixLargeLogo from '@assets/icons/logo/large/Netflix';
import DisneyLargeLogo from '@assets/icons/logo/large/Disney';
import SpotifyLargeLogo from '@assets/icons/logo/large/Spotify';
import AdobeLargeLogo from '@assets/icons/logo/large/Adobe';

interface IProps {
  data: {
    service: string;
    subplan: string;
    monthlyprice: number;
  };
}

export default function ServiceCard({ data }: IProps) {
  const theme = useTheme();

  const { service } = data;

  const serviceName =
    service === 'netflix'
      ? '넷플릭스'
      : service === 'disney'
      ? '디즈니플러스'
      : service === 'spotify'
      ? '스포티파이'
      : '어도비';

  return (
    <Card service={service}>
      <h4>
        <span className="a11y-hidden">{serviceName}</span>
        {service === 'netflix' && (
          <NetflixLargeLogo width="100%" height="100%" color={theme.color.base.white} />
        )}
        {service === 'disney' && (
          <DisneyLargeLogo width="100%" height="100%" color={theme.color.base.white} />
        )}
        {service === 'spotify' && (
          <SpotifyLargeLogo width="100%" height="100%" color={theme.color.base.white} />
        )}
        {service === 'adobe' && (
          <AdobeLargeLogo width="100%" height="100%" color={theme.color.base.white} />
        )}
      </h4>
      <CardInnerWrapper>
        <PlanDesc>
          <Service>{serviceName}</Service>
          <SubPlan>프리미엄 요금제</SubPlan>
          <MonthlyPrice>{`8,940원 / 1달`}</MonthlyPrice>
        </PlanDesc>
        <RemainingDateBadge service={service}>
          <span>D-1</span>
        </RemainingDateBadge>
      </CardInnerWrapper>
    </Card>
  );
}

const Card = styled.article<{ service: string }>`
  width: 168px;
  height: 228px;
  border-radius: 4px;
  padding: 14px;
  background-color: ${({ theme, service }) =>
    service === 'netflix'
      ? theme.color.brand.netflix
      : service === 'disney'
      ? theme.color.brand.disneyplus
      : service === 'spotify'
      ? theme.color.brand.spotify
      : service === 'adobe'
      ? theme.color.brand.adobe
      : theme.color.brand.discord};
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
const RemainingDateBadge = styled.div<{ service: string }>`
  background-color: ${({ theme }) => theme.color.base.white};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
    color: ${({ theme, service }) =>
      service === 'netflix'
        ? theme.color.brand.netflix
        : service === 'disney'
        ? theme.color.brand.disneyplus
        : service === 'spotify'
        ? theme.color.brand.spotify
        : service === 'adobe'
        ? theme.color.brand.adobe
        : theme.color.brand.discord};
  }
`;