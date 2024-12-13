import styled from '@emotion/styled';

interface IProps {
  label: string;
}

export default function InputBox({ label }: IProps) {
  return (
    <Container>
      <Label htmlFor="">{label}</Label>
      <Input type="text" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: solid 0.5px ${({ theme }) => theme.color.base.gray.base};
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 30px;
  color: ${({ theme }) => theme.color.base.gray.base};
`;

const Input = styled.input`
  width: calc(100% - 30px);
  margin-left: 10px;
  text-align: right;
`;
