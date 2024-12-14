import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';
import { SignupContainer, SignupTitle } from '../styled';
import styled from '@emotion/styled';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import { useSignupStore } from 'stores/useSignupStore';
import { usePlanStore } from 'stores/usePlanStore';
import { useEffect, useState } from 'react';
import PlanTabs from '../plan/PlanTabs';
import PlanOption from '../plan/PlanOption';
import MemberOption from '../plan/MemberOption';
import BuillingOption from '../plan/BuillingOption';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getPlatformPlansApi } from 'apis/platforms';
import { signupApi } from 'apis/auth';
import { setCookie } from '@utils/cookie';
import { isFulfilledPlan } from '@utils/platform';
import { useUserStore } from 'stores/useUserStore';

function SignupPlan() {
  const router = useRouter();

  const { setUser } = useUserStore();
  const { code, userId, budget, platforms, setPlatforms, resetSignupData } = useSignupStore();
  const { plans, setPlans } = usePlanStore();

  const [platformId, setPlatformId] = useState(platforms[0]?.platformId);

  const { data } = useQuery<IPlan[]>({
    queryKey: ['platformPlans', platformId],
    queryFn: () => getPlatformPlansApi(platformId),
    enabled: !!platformId,
  });

  const { mutate } = useMutation<ILoginRes, Error, ISignupReq>({
    mutationFn: data => signupApi(data),
    onSuccess: ({ status, data }) => {
      if (status === 200 && data.access_token && data.refresh_token) {
        resetSignupData();
        setUser(data);
        setCookie('accessToken', data.access_token);
        setCookie('refreshToken', data.refresh_token);
        router.push('/');
      }
    },
  });

  const getPlan = (platformId: string) => plans.filter(plan => plan.platformId === platformId)[0];

  const fulfilledPlans = plans.filter(plan => isFulfilledPlan(plan));

  const handleSubmit = () => {
    setPlatforms([...plans]);
    console.log('### 회원가입 요청', [...plans]);
    mutate({
      code,
      userId,
      budget,
      platforms: [...plans],
    });
  };

  useEffect(() => {
    setPlans([...platforms]);
  }, [platforms]);

  return (
    <>
      <BackHeader handleBack={() => router.push('/signup/service')} />
      <SignupContainer>
        <ContentWrap>
          <SignupTitle>선택한 구독 서비스별 요금제를 입력해 주세요.</SignupTitle>
          <PlanTabs platformId={platformId} setPlatformId={setPlatformId} />
          <div>
            <PlanOption options={data} plan={getPlan(platformId)} platformId={platformId} />
            <Divider />
            <MemberOption plan={getPlan(platformId)} platformId={platformId} />
            <Divider />
            <BuillingOption plan={getPlan(platformId)} platformId={platformId} />
          </div>
        </ContentWrap>
        <Button
          text={
            fulfilledPlans.length === plans.length
              ? '완료'
              : `요금제를 선택해주세요. (${fulfilledPlans.length}/${plans.length})`
          }
          disabled={fulfilledPlans.length !== plans.length}
          onClick={handleSubmit}
        />
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
