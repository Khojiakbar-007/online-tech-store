import Head from 'next/head';
import ProductCard from '../../components/product-card';

import * as allProducts from '../../fake-data';
import { defaultSep, defaultTitle, pageDescription, titles } from '../../shared/constants';

const CatalogPage = ({ catalogItem, products }) => {
  return (
    <main id="catalog-page">
      <Head>
        <meta
          name="description"
          content={`${titles[catalogItem]} ${pageDescription}`}
        />
        <title>{titles[catalogItem] + defaultSep + defaultTitle}</title>
      </Head>

      <div className="container-fluid" style={{ marginBottom: '30px' }}>
        <h3
          className="text-center"
          style={{ margin: '30px 0 20px', textTransform: 'capitalize' }}
        >
          {catalogItem === 'customBuilds' ? 'Custom Builds' : catalogItem}
        </h3>

        <div className="container fb-row--center--wrap" style={{ gap: '8px' }}>
          {products.map((prod, i) => (
            <ProductCard key={i} data={prod} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;

export const getStaticProps = async ({ params }) => {
  const { catalogItem } = params;
  return {
    props: {
      catalogItem,
      products: allProducts[catalogItem],
    },
  };
};

export const getStaticPaths = async () => {
  const categories = ['laptops', 'desktops', 'customBuilds', 'monitors'];

  const paths = categories.map(category => ({
    params: { catalogItem: category },
  }));

  return {
    paths,
    fallback: false,
  };
};
