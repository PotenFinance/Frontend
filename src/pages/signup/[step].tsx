import Budget from '@components/signup/step/Budget';
import Service from '@components/signup/step/Service';
import Plan from '@components/signup/step/Plan';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function SignupPage() {
  const router = useRouter();
  const { step } = router.query;

  return (
    <Container>
      {step === 'budget' && <Budget />}
      {step === 'service' && <Service />}
      {step === 'plan' && <Plan />}
    </Container>
  );
}

export default SignupPage;

const Container = styled.div`
  min-height: 100dvh;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;
