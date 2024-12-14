import SectionLayout from './SectionLayout';
import ServiceCard from './ServiceCard';
import styled from '@emotion/styled';

interface IProps {
  data: ISubscriptionDetails[];
}

/** 나의 구독 서비스 */
export default function MySubscription({ data }: IProps) {
  /** 카드 개수 */
  const count = data?.length;

  return (
    <SectionLayout heading="나의 구독 서비스" isFirst={true}>
      <CardList isStacked={count > 3}>
        {data.map(data => {
          const { platformId, platformName, planName, actualCost, renewalDaysLeft } = data;

          const serviceCardData = {
            platformId,
            platformName,
            planName,
            actualCost,
            renewalDaysLeft,
          };

          return (
            <li key={data.platformId}>
              <ServiceCard {...serviceCardData} />
            </li>
          );
        })}
      </CardList>
    </SectionLayout>
  );
}

const CardList = styled.ul<{ isStacked: boolean }>`
  margin-top: 12px;
  display: flex;
  justify-content: ${({ isStacked }) => (isStacked ? 'normal' : 'flex-start')};
  overflow-x: scroll;

  & > li + li {
    margin-left: 21px;
  }
`;
