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

const data = [
  {
    platformId: 101,
    planId: 1001,
    planName: '스탠다드 (연간 / 1명)',
    planCost: 50000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1002,
    planName: '스탠다드 (연간 / 2명)',
    planCost: 80000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1003,
    planName: '스탠다드 (연간 / 3명)',
    planCost: 100000,
    maxMembers: 3,
    isYearlyPlan: true,
  },
  {
    platformId: 101,
    planId: 1004,
    planName: '스탠다드 (월간)',
    planCost: 90000,
    maxMembers: 1,
    isYearlyPlan: true,
  },
];

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
                {data.map(v => (
                  <OptionItem key={v.planId}>
                    <div>
                      <p>{v.planName}</p>
                      <span>{v.planCost.toLocaleString()}원 / 1개월</span>
                    </div>
                    <Checkbox checked />
                  </OptionItem>
                ))}
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
                    <p>혼자서 결제하고 있어요.</p>
                  </div>
                  <Checkbox />
                </OptionItem>
                <OptionItem>
                  <div>
                    <p>같이 결제하고 있어요.</p>
                  </div>
                  <Checkbox />
                </OptionItem>
                <OptionItem>
                  <div>
                    <p>그룹원이 몇 명(본인 포함)인가요? 4명</p>
                  </div>
                  <Checkbox />
                </OptionItem>
              </OptionList>
            </Option>
            <Divider />
            {/* 컴포넌트 분리 ServiceOption */}
            <Option>
              <OptionTitle>
                <Status status="error" />
                <span>결제일</span>
              </OptionTitle>
              <OptionList>
                <OptionItem>
                  <div>
                    <p>매달마다 1일에 결제하고 있어요.</p>
                  </div>
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
