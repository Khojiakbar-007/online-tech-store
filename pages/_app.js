import Head from 'next/head';

import Layout from '../components/layout';
import CartContextProvider from '../context-provider';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
