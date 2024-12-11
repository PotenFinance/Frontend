import Budget from '@components/signup/step/Budget';
import Service from '@components/signup/step/Service';
import Search from '@components/signup/step/Search';
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
      {step === 'search' && <Search />}
      {step === 'plan' && <Plan />}
    </Container>
  );
}

export default SignupPage;

const Container = styled.div`
  height: calc(100dvh - 64px);
`;
