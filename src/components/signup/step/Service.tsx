import styled from '@emotion/styled';
import { SignupContainer, SignupTitle } from '../styled';
import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import PlusIcon from '@assets/icons/Plus';
import Button from '@components/common/Button';
import NetflixLargeLogo from '@assets/icons/logo/large/Netflix';
import { useTheme } from '@emotion/react';
import { useSignupStore } from 'stores/useSignupStore';
import { useEffect, useState } from 'react';
import { useServiceStore } from 'stores/useServiceStore';
import Search from './Search';

const data = [
  {
    platformId: 101,
    platformName: '넷플릭스',
    platformType: 'OTT',
  },
  {
    platformId: 102,
    platformName: '스포티파이',
    platformType: '음악',
  },
  {
    platformId: 103,
    platformName: '디스코드',
    platformType: '작업',
  },
  {
    platformId: 104,
    platformName: '어도비',
    platformType: '작업',
  },
  {
    platformId: 105,
    platformName: '티빙',
    platformType: 'OTT',
  },
];

function SignupService() {
  const router = useRouter();
  const { color } = useTheme();

  const [openSearch, setOpenSearch] = useState(false);

  const { platforms, setPlatforms } = useSignupStore();
  const { services, setServices, deleteService } = useServiceStore();

  const handleSubmit = () => {
    setPlatforms([
      ...services.map(v => ({
        platformId: v.platformId,
        platformName: v.platformName,
        platformType: v.platformType,
        planId: 0,
        isGroup: false,
        isYearlyPay: false,
        billingMonth: 0,
        billingDay: 0,
      })),
    ]);
    router.push('/signup/plan');
  };

  useEffect(() => {
    if (platforms.length) {
      setServices([
        ...platforms.map(v => ({
          platformId: v.platformId,
          platformName: v.platformName,
          platformType: v.platformType,
        })),
      ]);
    } else {
      setServices([...data]);
    }
  }, [platforms]);

  return openSearch ? (
    <Search handleClose={() => setOpenSearch(false)} />
  ) : (
    <>
      <BackHeader handleBack={() => router.push('/signup/budget')} />
      <SignupContainer>
        <ContentWrap>
          <SignupTitle>사용하고 있는 구독 서비스를 선택해 주세요.</SignupTitle>
          <ServiceList>
            {/* 컴포넌트 분리 AddedServiceItem */}
            {services.map(v => (
              <ServiceItem key={v.platformId}>
                <NetflixLargeLogo width={'100%'} height={'100%'} color={color.brand.netflix} />
                <div>
                  <div>
                    <span>{v.platformName}</span>
                    <p>{v.platformType}</p>
                  </div>
                  <DeleteButton onClick={() => deleteService(v.platformId)}>삭제</DeleteButton>
                </div>
              </ServiceItem>
            ))}
            {/* 컴포넌트 분리 AddServiceItem */}
            <PlusItem onClick={() => setOpenSearch(true)}>
              <PlusIcon color="white" width={40} height={40} />
            </PlusItem>
          </ServiceList>
        </ContentWrap>
        <Button text="다 선택했어요." disabled={!services.length} onClick={handleSubmit} />
      </SignupContainer>
    </>
  );
}

export default SignupService;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Item = styled.li`
  padding: 12px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const ServiceItem = styled(Item)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      span {
        font-family: ${({ theme }) => theme.typography.title_1.fontFamily};
        font-weight: ${({ theme }) => theme.typography.title_1.fontWeight};
        font-size: ${({ theme }) => theme.typography.title_1.fontSize};
        line-height: ${({ theme }) => theme.typography.title_1.lineHeight};
      }
      p {
        color: ${({ theme }) => theme.color.base.gray};
        font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
        font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
        font-size: ${({ theme }) => theme.typography.title_2.fontSize};
        line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
      }
    }
  }
`;

const DeleteButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.base.gray.base};
  color: ${({ theme }) => theme.color.base.white};
  font-family: ${({ theme }) => theme.typography.title_2.fontFamily};
  font-weight: ${({ theme }) => theme.typography.title_2.fontWeight};
  font-size: ${({ theme }) => theme.typography.title_2.fontSize};
  line-height: ${({ theme }) => theme.typography.title_2.lineHeight};
`;

const PlusItem = styled(Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
`;
