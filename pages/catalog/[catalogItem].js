import { useRouter } from 'next/router';
import ProductCard from '../../components/product-card';
import * as allProducts from '../../fake-data';

const CatalogPage = () => {
  const {
    query: { catalogItem = '' },
  } = useRouter();
  // const routeProps = useRouter();
  // console.log('router props: ', routeProps);

  return (
    <main id="catalog-page">
      <div className="container-fluid" style={{ marginBottom: '30px' }}>
        <h3
          className="text-center"
          style={{ margin: '30px 0 20px', textTransform: 'capitalize' }}
        >
          {catalogItem === 'customBuilds' ? 'Custom Builds' : catalogItem}
        </h3>

        <div className="container fb-row--center--wrap" style={{ gap: '8px' }}>
          {allProducts[catalogItem]?.map((prod, i) => (
            <ProductCard key={i} data={prod} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;

// export const getStaticProps = () => '';
