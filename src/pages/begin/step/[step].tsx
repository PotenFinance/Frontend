import Step1 from '@components/begin/step/1';
import Step2 from '@components/begin/step/2';
import Step3 from '@components/begin/step/3';
import Step4 from '@components/begin/step/4';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function BeginStepPage() {
  const router = useRouter();
  const { step } = router.query;

  return (
    <Container>
      {step === '1' && <Step1 />}
      {step === '2' && <Step2 />}
      {step === '3' && <Step3 />}
      {step === '4' && <Step4 />}
    </Container>
  );
}

export default BeginStepPage;

const Container = styled.div`
  height: 100%;
`;
