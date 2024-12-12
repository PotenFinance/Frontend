import styled from '@emotion/styled';

export const SignupContainer = styled.div`
  flex-grow: 1;
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const SignupTitle = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.display_2.fontSize.small};
  line-height: ${({ theme }) => theme.typography.display_2.lineHeight.small};
`;

export const PlanOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanOptionTitle = styled.div`
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

export const PlanOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  li:not(:last-of-type) {
    border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
  }
`;

export const PlanOptionItem = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_2.fontSize};
      line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
    }
    span {
      color: ${({ theme }) => theme.color.base.gray._5};
      font-family: ${({ theme }) => theme.typography.title_4.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_4.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_4.fontSize};
      line-height: ${({ theme }) => theme.typography.title_4.lineHeight};
    }
  }
`;
