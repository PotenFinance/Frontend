import { useRouter } from 'next/router';

function AuthCallbackPage() {
  const router = useRouter();
  const { code } = router.query;

  return <div>code: {code}</div>;
}

export default AuthCallbackPage;
