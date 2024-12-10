import styled from '@emotion/styled';
import { BeginStepContainer, BeginStepTitle } from '../styled';
import Link from 'next/link';
import BackHeader from '../BackHeader';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';

function BeginStep1() {
  const router = useRouter();

  return (
    <>
      <BackHeader handleBack={() => router.push('/begin')} />
      <BeginStepContainer>
        <BeginStepTitle>구독 서비스 이용 시 적정 예산은{'\n'}얼마라고 생각하시나요?</BeginStepTitle>
        <InputWrap>
          <span>내 생각은...</span>
          <div>
            <span>1달마다</span>
            <div>
              <PriceInput placeholder="00,000" />원
            </div>
          </div>
        </InputWrap>
        <Link href={'/begin/step/2'}>
          <Button text="결정했어요." />
        </Link>
      </BeginStepContainer>
    </>
  );
}

export default BeginStep1;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.color.primary._2};
  & > span {
    font-family: ${({ theme }) => theme.typography.heading_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.heading_2.fontWeight};
    font-size: ${({ theme }) => theme.typography.heading_2.fontSize};
    line-height: ${({ theme }) => theme.typography.heading_2.lineHeight};
  }
  & > div {
    font-family: ${({ theme }) => theme.typography.display_2.fontFamily};
    font-weight: ${({ theme }) => theme.typography.display_2.fontWeight};
    font-size: 32px;
    line-height: 53px;
  }
`;

const PriceInput = styled.input`
  width: 6em;
  text-decoration: underline #cccccc;
  &::placeholder {
    color: #cccccc;
  }
`;
