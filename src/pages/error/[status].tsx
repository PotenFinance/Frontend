import { STATUS_CODE } from '@constants/common';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function ErrorPage() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <ErrorPageContainer>
      <h1>
        {status}: {STATUS_CODE[status as string]}
      </h1>
      <p>잠시 후 다시 시도해 주세요.</p>
    </ErrorPageContainer>
  );
}

export default ErrorPage;

export const ErrorPageContainer = styled.div`
  height: 100dvh;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  h1 {
    font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
    line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
  }
  p {
    font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_1.fontSize};
    line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
  }
`;
