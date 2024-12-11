import styled from '@emotion/styled';
import { SignupContainer, SignupTitle } from '../styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import PlusIcon from '@assets/icons/Plus';
import Button from '@components/common/Button';
import NetflixLargeLogo from '@assets/icons/logo/large/Netflix';
import { useTheme } from '@emotion/react';

function SignupService() {
  const router = useRouter();
  const { color } = useTheme();

  return (
    <>
      <BackHeader handleBack={() => router.push('/signup/budget')} />
      <SignupContainer>
        <ContentWrap>
          <SignupTitle>사용하고 있는 구독 서비스를 선택해 주세요.</SignupTitle>
          <ServiceList>
            {/* 컴포넌트 분리 AddedServiceItem */}
            <ServiceItem>
              <NetflixLargeLogo width={'100%'} height={'100%'} color={color.brand.netflix} />
              <div>
                <div>
                  <span>넷플릭스</span>
                  <p>OTT</p>
                </div>
                <DeleteButton>삭제</DeleteButton>
              </div>
            </ServiceItem>
            <Link href={'/signup/search'}>
              {/* 컴포넌트 분리 AddServiceItem */}
              <PlusItem>
                <PlusIcon color="white" width={40} height={40} />
              </PlusItem>
            </Link>
          </ServiceList>
        </ContentWrap>
        <Link href={'/signup/plan'}>
          <Button text="다 선택했어요." />
        </Link>
      </SignupContainer>
    </>
  );
}

export default SignupService;

const ContentWrap = styled.div`
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
  height: 100%;
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