import { Global, ThemeProvider } from '@emotion/react';
import Layout from '@components/layout';
import type { AppProps } from 'next/app';
import { global } from '@styles/globals';
import { lightTheme } from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router';

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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <Global styles={global} />
        <Layout viewNavTab={router.pathname !== '/login'}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
