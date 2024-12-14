import styled from '@emotion/styled';

interface IProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

export default function InputBox({ inputValue, onInputChange, isError }: IProps) {
  return (
    <Container>
      <Label htmlFor="">이름</Label>
      <Input type="text" value={inputValue} onChange={onInputChange} isError={isError} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
`;

const Input = styled.input<{ isError: boolean }>`
  margin-top: 16px;
  border-bottom: solid 1px
    ${({ theme, isError }) => (isError ? theme.color.theme.negavite : theme.color.base.gray.base)};
  padding: 8px 4px;
`;
