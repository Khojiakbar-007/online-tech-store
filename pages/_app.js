import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/layout';
import CartContextProvider from '../context-provider';
import '../styles/index.scss';

function MyApp({ Component, pageProps: { session, ...otherPageProps } }) {
  return (
    <>
      <Head>
        <title>Online Tech Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />

        <meta name="author" content="Khojiakbar Avazov" />
        <meta
          name="description"
          content="Online Tech Store of Khojiakbar Avazov, Front End Web Developer. This is a portfolio website written in NextJS. Features: fast, optimized, SEO friendly website"
        />

        <link rel="icon" href="/Logo.svg" type="image/svg" />
      </Head>

      <SessionProvider session={session}>
        <CartContextProvider>
          <Layout>
            <Component {...otherPageProps} />
          </Layout>
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
