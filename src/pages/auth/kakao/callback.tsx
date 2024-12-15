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
    try {
      const data: IUserInfo = await loginApi(code as string);
      if (data.accessToken && data.refreshToken) {
        setUser(data);
        setCookie('accessToken', data.accessToken);
        setCookie('refreshToken', data.refreshToken);
        router.push('/');
      } else {
        setUserId(data.id);
        setCode(code as string);
        router.push('/signup/budget');
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (code) login();
  }, [code]);

  return <div></div>;
}

export default AuthCallbackPage;
