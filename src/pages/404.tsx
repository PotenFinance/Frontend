import Button from '@components/common/Button';
import Link from 'next/link';
import { ErrorPageContainer } from './error/[status]';

function NotFoundPage() {
  return (
    <ErrorPageContainer>
      <h1>404: 페이지를 찾을 수 없습니다.</h1>
      <Link href={'/'}>
        <Button text="홈으로 돌아가기" />
      </Link>
    </ErrorPageContainer>
  );
}

export default NotFoundPage;
