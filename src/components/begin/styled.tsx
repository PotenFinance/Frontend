import styled from '@emotion/styled';

export const BeginStepTitle = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.display_2.fontSize.small};
  line-height: ${({ theme }) => theme.typography.display_2.lineHeight.small};
`;
