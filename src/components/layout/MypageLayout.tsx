import ArrowBackIcon from '@assets/icons/arrow/ArrowBack';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface IProps {
  children: React.ReactNode;
  pageName: string;
  /** 헤더바 우측에 위치하는 버튼 */
  buttonName?: string;
  onButtonClick?: () => void;
  /** 헤더바 좌측 뒤로가기 화살표 버튼 클릭시 호출하는 함수 */
  onBackButtonClick?: () => void;
}

export default function MyPageLayout({
  children,
  pageName = '내 정보',
  buttonName,
  onButtonClick,
  onBackButtonClick,
}: IProps) {
  const router = useRouter();
  const handleBackButtonClick = onBackButtonClick ? onBackButtonClick : () => router.back();

  return (
    <Container>
      <Header hasButton={!!buttonName}>
        <button type="button" onClick={handleBackButtonClick}>
          <ArrowBackIcon height={16} />
        </button>
        <Heading>{pageName}</Heading>
        {buttonName && <Button onClick={onButtonClick}>{buttonName}</Button>}
      </Header>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding: 0 24px;
  height: calc(100vh - 64px); // 하단 nav 탭 height
`;

const Header = styled.div<{ hasButton: boolean }>`
  display: flex;
  justify-content: ${({ hasButton }) => (hasButton ? 'space-between' : 'normal')};
  align-items: center;
  height: 39px;
`;

const GoBackButton = styled.button``;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
  font-size: ${({ theme }) => theme.typography.title_1.fontSize};
  font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
  margin: 0 auto;
`;

const Button = styled.button`
  font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
  color: ${({ theme }) => theme.color.primary._2};
`;
