// pages/_app.tsx

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/hh.png" sizes="64x64" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
