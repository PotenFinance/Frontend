import styled from '@emotion/styled';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
}

function Checkbox({ checked, ...props }: IProps) {
  return <Container checked={checked} {...props} />;
}

export default Checkbox;

const Container = styled.button<{ checked?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.base.black};
  background: ${({ theme, checked }) => (checked ? theme.color.base.black : 'none')};
`;
