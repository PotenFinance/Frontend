import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
}

interface IProps extends ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
}

function Button({ text, icon, bgColor, textColor, disabled, ...props }: IProps) {
  return (
    <Container bgColor={bgColor} textColor={textColor} disabled={disabled} {...props}>
      {icon}
      <span>{text}</span>
    </Container>
  );
}

export default Button;

const Container = styled.button<ButtonProps>`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? theme.color.base.gray.base : bgColor || theme.color.primary._1};
  span {
    color: ${({ theme, textColor }) => textColor || theme.color.base.white};
    font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
    font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
    line-height: ${({ theme }) => theme.typography.heading_2.lineHeight};
  }
`;
