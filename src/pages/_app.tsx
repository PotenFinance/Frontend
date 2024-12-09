import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { global } from '@src/styles/globals';
import Layout from '@src/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  );
}
