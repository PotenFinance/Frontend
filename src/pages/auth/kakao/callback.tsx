import { setCookie } from '@utils/cookie';
import { loginApi } from 'apis/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSignupStore } from 'stores/useSignupStore';
import { useUserStore } from 'stores/useUserStore';

function AuthCallbackPage() {
  const router = useRouter();
  const { code } = router.query;

  const { setUserId, setCode } = useSignupStore();
  const { setUser } = useUserStore();

  const login = async () => {
    const data: IUserInfo = await loginApi(code as string);
    if (data.access_token && data.refresh_token) {
      setUser(data);
      setCookie('accessToken', data.access_token);
      setCookie('refreshToken', data.refresh_token);
      router.push('/');
    } else {
      setUserId(data.id);
      setCode(code as string);
      router.push('/signup/budget');
    }
  };

  useEffect(() => {
    if (code) login();
  }, [code]);

  return <div></div>;
}

export default AuthCallbackPage;
