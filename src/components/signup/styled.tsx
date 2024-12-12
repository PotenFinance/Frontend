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
