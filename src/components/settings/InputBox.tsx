import styled from '@emotion/styled';

interface IProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({ inputValue, onInputChange }: IProps) {
  return (
    <Container>
      <Label htmlFor="">이름</Label>
      <Input type="text" value={inputValue} onChange={onInputChange} />
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

const Input = styled.input`
  margin-top: 16px;
  border-bottom: solid 1px ${({ theme }) => theme.color.base.gray.base};
  padding: 8px 4px;
`;
