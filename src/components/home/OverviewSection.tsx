import styled from '@emotion/styled';
import ExpensesListCard from './ExpensesListCard';

interface IProps {
  data: { platform: string; subPlan: string; price: number }[];
}

export default function OverviewSection({ data }: IProps) {
  return (
    <Container>
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
        <div>
          <SubCount>{data.length}</SubCount>
          <SubText>구독</SubText>
        </div>
      </OverviewDesc>
      <ExpensesListCard subListData={data} />
      <RemainingBudget>
        <Desc>{`남은 예산`}</Desc>
        <Amount>{`7,800원`}</Amount>
      </RemainingBudget>
    </Container>
  );
}

const Container = styled.section`
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

/** 구독 서비스 개수 */
const SubCount = styled.span`
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-size: 64px;
  font-weight: 800;
`;

/** '구독' 텍스트 */
const SubText = styled.span`
  font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
  font-size: ${({ theme }) => theme.typography.title_2.fontSize};
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