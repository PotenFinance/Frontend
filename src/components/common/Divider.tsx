import styled from '@emotion/styled';

function Divider() {
  return <Container />;
}

export default Divider;

const Container = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.base.gray._c};
`;
