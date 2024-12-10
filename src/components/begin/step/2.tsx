import styled from '@emotion/styled';
import { BeginStepTitle } from '../styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import PlusIcon from '@assets/icons/Plus';
import Button from '@components/common/Button';

function BeginStep2() {
  const router = useRouter();
  return (
    <>
      <BackHeader handleBack={() => router.push('/begin/step/1')} />
      <Container>
        <ContentWrap>
          <BeginStepTitle>사용하고 있는 구독 서비스를 선택해 주세요.</BeginStepTitle>
          <SubList>
            <SubItem>
              <img />
              <div>
                <div>
                  <span>넷플릭스</span>
                  <p>OTT</p>
                </div>
                <DeleteButton>삭제</DeleteButton>
              </div>
            </SubItem>
            <Link href={'/begin/step/3'}>
              <PlusItem>
                <PlusIcon color="white" width={41} height={41} />
              </PlusItem>
            </Link>
          </SubList>
        </ContentWrap>
        <Link href={'/begin/step/4'}>
          <Button text="다 선택했어요." />
        </Link>
      </Container>
    </>
  );
}

export default BeginStep2;

const Container = styled.div`
  padding: 20px 0 40px;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Item = styled.li`
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const SubItem = styled(Item)`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
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
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
`;
