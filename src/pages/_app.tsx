import { Global, ThemeProvider } from '@emotion/react';
import Layout from '@components/layout';
import type { AppProps } from 'next/app';
import { global } from '@styles/globals';
import { lightTheme } from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from '@utils/cookie';
import Head from 'next/head';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPrivatePage =
    !router.pathname.includes('login') &&
    !router.pathname.includes('auth') &&
    !router.pathname.includes('signup');

  useEffect(() => {
    if (isPrivatePage && !getCookie('accessToken')) router.push('/login');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <Global styles={global} />
        <Head>
          <title>써빗 Subit</title>
        </Head>
        {(!isPrivatePage || (isPrivatePage && getCookie('accessToken'))) && (
          <Layout viewNavTab={isPrivatePage}>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
