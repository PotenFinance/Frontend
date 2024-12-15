import styled from '@emotion/styled';
import { SignupContainer, SignupTitle } from '../styled';
import BackHeader from '../BackHeader';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';
import { useSignupStore } from 'stores/useSignupStore';
import { useState } from 'react';
import { replaceNonNumeric } from '@utils/regex';

function SignupBudget() {
  const router = useRouter();

  const { budget, setBudget } = useSignupStore();
  const [inputBudget, setInputBudget] = useState(budget);

  const handleSubmit = () => {
    setBudget(inputBudget);
    router.push('/signup/service');
  };

  return (
    <>
      <BackHeader handleBack={() => router.push('/login')} />
      <SignupContainer>
        <SignupTitle>구독 서비스 이용 시 적정 예산은{'\n'}얼마라고 생각하시나요?</SignupTitle>
        <InputWrap>
          <span>내 생각은...</span>
          <div>
            <span>1달마다</span>
            <div>
              <PriceInput
                value={inputBudget}
                onChange={e => setInputBudget(replaceNonNumeric(e.target.value))}
                placeholder="00,000"
              />
              원
            </div>
          </div>
        </InputWrap>
        <Button text="결정했어요." disabled={!inputBudget} onClick={handleSubmit} />
      </SignupContainer>
    </>
  );
}

export default SignupBudget;

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
  width: 130px;
  text-decoration: underline ${({ theme }) => theme.color.base.gray._c};
  &::placeholder {
    color: ${({ theme }) => theme.color.base.gray._c};
  }
`;
