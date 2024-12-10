import ArrowBackIcon from '@assets/icons/arrow/ArrowBack';
import styled from '@emotion/styled';

interface IProps {
  handleBack: () => void;
}

function BackHeader({ handleBack }: IProps) {
  return (
    <Container>
      <BackButton onClick={handleBack}>
        <ArrowBackIcon width={12} height={20} />
      </BackButton>
    </Container>
  );
}

export default BackHeader;

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  display: inline-flex;
`;
