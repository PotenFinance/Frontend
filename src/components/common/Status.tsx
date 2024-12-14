import styled from '@emotion/styled';

interface IProps {
  status: TStatus;
}

function Status({ status }: IProps) {
  return <Container status={status} />;
}

export default Status;

const Container = styled.div<{ status?: TStatus }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    status === 'success' ? theme.color.theme.positive : 'transparent'};
  border: 1px solid
    ${({ theme, status }) =>
      status === 'warn'
        ? theme.color.secondary
        : status === 'error'
        ? theme.color.theme.negavite
        : 'transparent'};
`;
