import SectionLayout from './SectionLayout';
import ServiceCard from './ServiceCard';
import styled from '@emotion/styled';

interface IProps {
  data: ISubscriptionDetails[];
}

const dummyData = [
  {
    service: 'netflix',
    subplan: 'general',
    monthlyprice: 8940,
  },
  {
    service: 'disney',
    subplan: 'general',
    monthlyprice: 8940,
  },
  {
    service: 'spotify',
    subplan: 'general',
    monthlyprice: 8940,
  },
  {
    service: 'adobe',
    subplan: 'general',
    monthlyprice: 8940,
  },
];

/** 나의 구독 서비스 */
export default function MySubscription({ data }: IProps) {
  /** 카드 개수 */
  const count = data?.length;

  return (
    <SectionLayout heading="나의 구독 서비스" isFirst={true}>
      <CardList moreThanTwo={count < 2}>
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

const CardList = styled.ul<{ moreThanTwo: boolean }>`
  margin-top: 12px;
  display: flex;
  justify-content: ${({ moreThanTwo }) => (moreThanTwo ? 'normal' : 'space-between')};
  overflow-x: scroll;
`;
