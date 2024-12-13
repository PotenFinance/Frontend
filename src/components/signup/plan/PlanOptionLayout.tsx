import Status from '@components/common/Status';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface IProps {
  success: boolean;
  title: string;
  children: ReactNode;
}

function PlanOptionLayout({ success, title, children }: IProps) {
  return (
    <Container>
      <Title>
        <Status status={success ? 'success' : 'error'} />
        <span>{title}</span>
      </Title>
      <List>{children}</List>
    </Container>
  );
}

export default PlanOptionLayout;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
    line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  li:not(:last-of-type) {
    border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
  }
`;
