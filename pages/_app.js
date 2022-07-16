import Layout from '../components/layout';
import CartContextProvider from '../context-provider';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
