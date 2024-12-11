import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import { SignupContainer, SignupTitle } from '../styled';
import styled from '@emotion/styled';
import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';
import { useTheme } from '@emotion/react';
import Status from '@components/common/Status';
import Checkbox from '@components/common/Checkbox';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';

function SignupPlan() {
  const router = useRouter();
  const { color } = useTheme();

  return (
    <>
      <BackHeader handleBack={() => router.push('/signup/service')} />
      <SignupContainer>
        <ContentWrap>
          <SignupTitle>선택한 구독 서비스별 요금제를 입력해 주세요.</SignupTitle>
          {/* 컴포넌트 분리 ServiceTabs */}
          <Tabs>
            <Tab>
              <SpotifySmallLogo width={40} height={40} color={color.base.gray.base} />
              <Status status="success" />
            </Tab>
          </Tabs>
          <div>
            {/* 컴포넌트 분리 ServiceOption */}
            <Option>
              <OptionTitle>
                <Status status="warn" />
                <span>플랜</span>
              </OptionTitle>
              <OptionList>
                <OptionItem>
                  <div>
                    <p>프리미엄 요금제</p>
                    <span>17,000원 / 1개월</span>
                  </div>
                  <Checkbox checked />
                </OptionItem>
              </OptionList>
            </Option>
            <Divider />
            {/* 컴포넌트 분리 ServiceOption */}
            <Option>
              <OptionTitle>
                <Status status="error" />
                <span>개인 / 그룹</span>
              </OptionTitle>
              <OptionList>
                <OptionItem>
                  <div>
                    <p>혼자서 구독하고 있어요.</p>
                  </div>
                  <Checkbox />
                </OptionItem>
              </OptionList>
            </Option>
          </div>
        </ContentWrap>
        <Button text="완료" />
      </SignupContainer>
    </>
  );
}

export default SignupPlan;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Tabs = styled.ul`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  border-top: 0.3px solid ${({ theme }) => theme.color.base.black};
  border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
`;

const Tab = styled.li`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionTitle = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
    font-size: ${({ theme }) => theme.typography.title_2.fontSize};
    line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
  }
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  li:not(:last-of-type) {
    border-bottom: 0.3px solid ${({ theme }) => theme.color.base.black};
  }
`;

const OptionItem = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_2.fontSize};
      line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
    }
    span {
      color: ${({ theme }) => theme.color.base.gray._5};
      font-family: ${({ theme }) => theme.typography.title_4.fontFamily};
      font-weight: ${({ theme }) => theme.typography.title_4.fontWeight};
      font-size: ${({ theme }) => theme.typography.title_4.fontSize};
      line-height: ${({ theme }) => theme.typography.title_4.lineHeight};
    }
  }
`;
