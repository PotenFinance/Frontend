import styled from '@emotion/styled';
import { getMonth, getYear } from '@utils/date';

interface IProps {
  data: ISubscriptionDetails[];
}

/** 당월 구독 내역 */
export default function ExpensesListCard({ data }: IProps) {
  const currentYear = getYear();
  const currentMonth = getMonth();

  return (
    <Container>
      <Heading>
        <span>{`${currentYear}년 ${currentMonth}월`}</span>
        {` 구독 내역`}
      </Heading>
      <List>
        {data?.map(sub => {
          return (
            <Item key={sub.platformId}>
              <div>
                <Service>{sub.platformName}</Service>
                <SubPlan>{sub.planName}</SubPlan>
              </div>
              <Price>{sub.actualCost.toLocaleString()}원</Price>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 14px;
  background-color: ${({ theme }) => theme.color.primary._2};
  border-radius: 12px;
  padding: 16px 8px;
`;

const Heading = styled.h3`
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};

  & span {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

/** 구독 내역 리스트 */
const List = styled.ul`
  margin-top: 20px;
`;

/** 구독 내역 항목 */
const Item = styled.li`
  font-size: ${({ theme }) => theme.typography.body_1.fontSize};
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: 5px;
  }
`;

/** 구독하는 서비스 */
const Service = styled.span`
  font-weight: ${({ theme }) =>
    (theme.typography.body_1.fontWeight as { [key: string]: number }).bold};
`;

/** 구독 플랜 */
const SubPlan = styled.span`
  font-weight: ${({ theme }) =>
    (theme.typography.body_1.fontWeight as { [key: string]: number }).default};
  margin-left: 5px;
`;

const Price = styled.span`
  font-weight: ${({ theme }) =>
    (theme.typography.body_1.fontWeight as { [key: string]: number }).bold};
`;
