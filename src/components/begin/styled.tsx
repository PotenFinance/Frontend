import styled from '@emotion/styled';

export const BeginMainButton = styled.button`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25.85px;
  background-color: ${({ theme }) => theme.color.primary._1};
  color: ${({ theme }) => theme.color.base.white};
  font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
  line-height: ${({ theme }) => theme.typography.heading_2.lineHeight};
`;

export const BeginStepTitle = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.display_2.fontSize.small};
  line-height: ${({ theme }) => theme.typography.display_2.lineHeight.small};
`;
