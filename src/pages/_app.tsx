import { Global, ThemeProvider } from '@emotion/react';
import Layout from '@components/layout';
import type { AppProps } from 'next/app';
import { global } from '@styles/globals';
import { lightTheme } from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
