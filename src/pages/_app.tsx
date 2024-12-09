import { Global } from '@emotion/react';
import Layout from '@components/layout';
import type { AppProps } from 'next/app';
import { global } from '@styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  );
}
