import styled from '@emotion/styled';
import Link from 'next/link';
import localFont from 'next/font/local';

interface LayoutProps {
  /**
   * page 컴포넌트
   */
  children?: React.ReactNode;
}

const pretendard = localFont({
  src: '../../fonts/PretendardJPVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard-jp',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <Container className={pretendard.variable}>
      {children}
      <p>안녕하세요</p>
      <Nav>
        <Link href="/">홈</Link>
        <Link href="/">소비리포트</Link>
        <Link href="/">커뮤니티</Link>
        <Link href="/mypage">마이페이지</Link>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  min-width: 390px;
  max-width: 600px;
  margin: 0 auto;
  /* border: solid 1px red; */
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
`;
