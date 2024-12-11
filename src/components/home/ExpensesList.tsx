import styled from '@emotion/styled';

// todo: 추후 수정 예정
interface IProps {
  subListData: Array<{
    platform: string;
    subPlan: string;
    price: number;
  }>;
}

/** 당원 구독 내역 */
export default function ExpensesList({ subListData }: IProps) {
  return (
    <Container>
      <Heading>
        <span>{`2024년 12월`}</span>
        {` 구독 내역`}
      </Heading>
      <List>
        {subListData.map(data => {
          return (
            <Item key={data.platform}>
              <div>
                <Service>{data.platform}</Service>
                <SubPlan>{data.subPlan}</SubPlan>
              </div>
              <Price>{data.price.toLocaleString()}원</Price>
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
