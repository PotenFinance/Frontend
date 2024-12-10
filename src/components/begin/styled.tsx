import styled from '@emotion/styled';

export const BeginStepContainer = styled.div`
  padding: 20px 16px 40px;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BeginStepTitle = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.display_2.fontSize.small};
  line-height: ${({ theme }) => theme.typography.display_2.lineHeight.small};
`;
