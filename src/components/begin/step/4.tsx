import { useRouter } from 'next/router';
import BackHeader from '../BackHeader';

function BeginStep4() {
  const router = useRouter();

  return (
    <>
      <BackHeader handleBack={() => router.push('/begin/step/2')} />
    </>
  );
}

export default BeginStep4;
