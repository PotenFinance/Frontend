import { MySubscription, YearlySpending, BudgetStatus, OverviewSection } from '@components/home';
import SavingOptions from '@components/home/SavingOptions';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { getHomeData } from 'apis/home';
import Head from 'next/head';

/** 나의 구독 서비스 더미데이터 */
const subDummyData = [
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

export default function Home() {
  const { data, status, error } = useQuery({
    queryKey: ['home'],
    queryFn: () => getHomeData({ userId: '1234' }),
    select: ({ data }) => {
      console.log('홈데이터', data?.data);

      const {
        userName,
        totalSubscriptionCost,
        totalSubscriptions,
        subscriptionDetails,
        remainingBudget,
        annualSubscriptionCost,
        userBudget,
      } = data?.data;

      return {
        // 당월 구독 비용 개요 데이터
        overviewData: {
          userName,
          totalSubscriptionCost,
          totalSubscriptions,
          subscriptionDetails,
          remainingBudget,
        },
        // 나의 구독 서비스 데이터
        subscriptionDetails,
        // 연간 구독 비용 데이터
        annualSpendingData: { ...annualSubscriptionCost, userBudget },
      };
    },
  });

  return (
    <>
      <Head>
        <title>{`홈 | SUBIT`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1 className="a11y-hidden">홈</h1>
        {data && <OverviewSection {...data.overviewData} />}
        <ScrollableContainer>
          {data && <MySubscription data={data.subscriptionDetails} />}
          {data && <YearlySpending {...data.annualSpendingData} />}
          {/* TODO: BudgetStatus: 예산이 초과한 경우에만 보여준다 */}
          <BudgetStatus />
          {/* 후순위 */}
          {/* <SavingOptions /> */}
        </ScrollableContainer>
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.primary._1};
`;

const ScrollableContainer = styled.div`
  height: calc(100vh - 100px);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.color.base.white};
  // 페이지 내 요소가 탭에 가리지 않게 하기 위한 padding-bottom
  padding-bottom: 64px;
  position: sticky;
  top: 18px;
  overflow-y: scroll;
`;
