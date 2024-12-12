import { MySubscription, ExpensesListCard, YearlySpending, BudgetStatus } from '@components/home';
import SavingOptions from '@components/home/SavingOptions';
import styled from '@emotion/styled';
import { TypographySize } from '@styles/theme';

import Head from 'next/head';

// 서비스명
// 가격
// 구독플랜명

const subListMockData = [
  {
    platform: '넷플릭스',
    subPlan: '프리미엄',
    price: 8940,
  },
  {
    platform: '디즈니+',
    subPlan: '일반',
    price: 9900,
  },
  {
    platform: '스포티파이',
    subPlan: '일반',
    price: 11900,
  },
  {
    platform: '어도비',
    subPlan: 'CC(All app)',
    price: 20900,
  },
  {
    platform: '디스코드',
    subPlan: '니트로',
    price: 9900,
  },
  {
    platform: '피그마',
    subPlan: '프로페셔널',
    price: 20000,
  },
  {
    platform: '오픈 AI',
    subPlan: 'GPT 4o',
    price: 10760,
  },
];

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
  // const handleLogin = () => {
  //   if (window.Kakao.isInitialized()) {
  //     window.Kakao.Auth.authorize({
  //       redirectUri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  // }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1 className="a11y-hidden">홈</h1>
        <OverviewSection>
          <OverviewDesc>
            <h2>
              <ul>
                <li>
                  <Username>{`박지수님`}</Username>
                  {`의 이번달 총 구독 비용은`}
                </li>
                <li>
                  <TotalSpendingAmount>{`102,200원`}</TotalSpendingAmount>
                  {`입니다.`}
                </li>
              </ul>
            </h2>
            <SubCountContainer>
              <SubCount>{subListMockData.length}</SubCount>
              <span className="text">구독</span>
            </SubCountContainer>
          </OverviewDesc>
          <ExpensesListCard subListData={subListMockData} />
          <RemainingBudget>
            <Desc>{`남은 예산`}</Desc>
            <Amount>{`7,800원`}</Amount>
          </RemainingBudget>
        </OverviewSection>
        <ScrollableContainer>
          <MySubscription data={subDummyData} />
          <YearlySpending />
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

const OverviewSection = styled.section`
  color: ${({ theme }) => theme.color.base.white};
  padding: 10px 19px 15px;
  position: sticky;
  top: 0;
`;

const OverviewDesc = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    line-height: 26px;

    & ul li:nth-child(2) {
      margin-top: 7px;
    }
  }
`;

const Username = styled.span`
  font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
`;

const TotalSpendingAmount = styled.span`
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
`;

/** 구독서비스 총 개수 표시 부분
 * @example 7 구독
 */
const SubCountContainer = styled.div`
  & .count {
    font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
    font-size: ${({ theme }) => (theme.typography.display_2.fontSize as TypographySize).large};
  }

  & .text {
    font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
  }
`;

const SubCount = styled.span`
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-size: 64px;
  font-weight: 800;
`;

const RemainingBudget = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const Desc = styled.span`
  font-weight: ${({ theme }) =>
    (theme.typography.body_1.fontWeight as { [key: string]: number }).bold};
`;

const Amount = styled.span`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
`;

const ScrollableContainer = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  // TODO: 추후 삭제
  /* margin-top: -10px; */
  background-color: ${({ theme }) => theme.color.base.white};
  // 페이지 내 요소가 탭에 가리지 않게 하기 위한 padding-bottom
  padding-bottom: 64px;
  position: sticky;
  top: 18px;
`;
