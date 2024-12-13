import styled from '@emotion/styled';
import localFont from 'next/font/local';
import NavTab from './NavTab';

interface LayoutProps {
  /**
   * page 컴포넌트
   */
  children?: React.ReactNode;
  viewNavTab?: boolean;
}

const pretendard = localFont({
  src: '../../fonts/PretendardJPVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard-jp',
});

export default function Layout({ children, viewNavTab = true }: LayoutProps) {
  return (
    <Container className={pretendard.variable}>
      {children}
      {viewNavTab && (
        <div className="nav-wrapper">
          <NavTab />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-width: 390px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 64px;

  // 하단 탭 화면 하단에 고정하기 위한 wrapper 요소
  & .nav-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
