import EyeIcon from '@assets/icons/Eye';
import Button from '@components/common/Button';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { alertComingSoon } from '@utils/alert';
import Image from 'next/image';
import { useEffect } from 'react';
import { usePlanStore } from 'stores/usePlanStore';
import { useServiceStore } from 'stores/useServiceStore';
import { useSignupStore } from 'stores/useSignupStore';

function LoginPage() {
  const { color } = useTheme();

  const { resetSignupData } = useSignupStore();
  const { resetServiceData } = useServiceStore();
  const { resetPlanData } = usePlanStore();

  const handleClickExplore = () => {
    alertComingSoon();
    return;
  };

  const handleLogin = () => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_AUTH_KAKAO_REDIRECT_URL,
      });
    }
  };

  useEffect(() => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

  useEffect(() => {
    resetSignupData();
    resetServiceData();
    resetPlanData();
  }, []);

  return (
    <Container>
      <Title>
        <span>써빗</span>에서 구독 비용을{'\n'}관리해볼까요?
      </Title>
      <Image
        src={'/images/cards.png'}
        alt="cards"
        layout="responsive"
        width={750}
        height={719}
        style={{ maxWidth: 280 }}
      />
      <ButtonWrap>
        <Button
          text="카카오 계정으로 로그인"
          icon={<Image src={'/images/kakao-logo.png'} alt="kakao-logo" width={24} height={24} />}
          bgColor={color.secondary}
          textColor={color.base.black}
          onClick={handleLogin}
        />
        <ExploreButton onClick={handleClickExplore}>
          <EyeIcon width={16} height={16} /> 써빗 둘러보기
        </ExploreButton>
      </ButtonWrap>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  height: 100dvh;
  padding: 20px 16px;
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
  align-items: center;
  gap: 20px;
`;

const ExploreButton = styled.button`
  padding: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.typography.title_3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_3.fontSize};
  line-height: ${({ theme }) => theme.typography.title_3.lineHeight};
`;
