import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function BeginPage() {
  const handleLogin = () => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL,
      });
    }
  };

  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }, []);

  return (
    <PageWrap>
      <Title>
        <span>써빗</span>에서 구독 비용을{'\n'}관리해볼까요?
      </Title>
      <Image />
      <ButtonWrap>
        <Link href={'/begin/step/1'}>
          <MainButton>시작하기</MainButton>
        </Link>
        <LoginButton onClick={handleLogin}>
          <Image src={'/images/kakao-logo.png'} alt="kakao-logo" width={24} height={24} />
          카카오 계정으로 로그인하기
        </LoginButton>
      </ButtonWrap>
    </PageWrap>
  );
}

export default BeginPage;

const PageWrap = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Title = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.primary._2};
  font-family: ${({ theme }) => theme.typography.heading_1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_1.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_1.fontSize};
  line-height: ${({ theme }) => theme.typography.heading_1.lineHeight};
  span {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainButton = styled.button`
  width: 240px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25.85px;
  background-color: ${({ theme }) => theme.color.primary._1};
  color: ${({ theme }) => theme.color.base.white};
  font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
  line-height: ${({ theme }) => theme.typography.heading_2.lineHeight};
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
`;