import { Global, ThemeProvider } from '@emotion/react';
import Layout from '@components/layout';
import type { AppProps } from 'next/app';
import { global } from '@styles/globals';
import { lightTheme } from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <Global styles={global} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
