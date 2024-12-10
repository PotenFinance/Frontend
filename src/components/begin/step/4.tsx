import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import { BeginStepContainer, BeginStepTitle } from '../styled';
import styled from '@emotion/styled';
import SpotifySmallLogo from '@assets/icons/logo/small/Spotify';
import { useTheme } from '@emotion/react';

function BeginStep4() {
  const router = useRouter();
  const { color } = useTheme();

  return (
    <>
      <BackHeader handleBack={() => router.push('/begin/step/2')} />
      <BeginStepContainer>
        <ContentWrap>
          <BeginStepTitle>선택한 구독 서비스별 요금제를 입력해 주세요.</BeginStepTitle>
          <Tabs>
            <Tab>
              <SpotifySmallLogo width={40} height={40} color={color.base.gray.base} />
              <Status color="green" />
            </Tab>
          </Tabs>
          <div>
            <Option>
              <OptionTitle>
                <Status color="green" />
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
            <Devider />
            <Option>
              <OptionTitle>
                <Status color="green" />
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
      </BeginStepContainer>
    </>
  );
}

export default BeginStep4;

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

const Status = styled.div<{ color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, color }) =>
    color === 'green' ? theme.color.theme.positive : 'transparent'};
  border: 1px solid
    ${({ theme, color }) =>
      color === 'yellow'
        ? theme.color.secondary
        : color === 'red'
        ? theme.color.theme.negavite
        : 'transparent'};
`;

const Devider = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.base.gray._c};
`;

const Checkbox = styled.button<{ checked?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.base.black};
  background: ${({ theme, checked }) => (checked ? theme.color.base.black : 'none')};
`;
