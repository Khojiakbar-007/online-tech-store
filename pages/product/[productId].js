import Head from 'next/head';
import Image from 'next/image';

import ProductQuantity from '../../components/product-quantity';
import { getProductData } from '../../utils/context-utils';
import {
  defaultTitle,
  defaultSep,
  productDescription,
} from '../../shared/constants';

function ProductPage({ product }) {
  const { title, imgUrl } = product;

  return (
    <main id="product-page">
      <Head>
        <meta name="description" content={`${title} ${productDescription}`} />
        <title>{defaultTitle + defaultSep + title}</title>
      </Head>

      <ProductQuantity product={product} />

      <section id="product-detail">
        <div className="container-fluid--2 fb-row fb--align-items--center">
          <div className="product-details">
            <h2>{title}</h2>
            <span className="review-request">
              Be the first to review this product
            </span>

            <p className="desc">
              Windows 11 Home, Gaming Keyboard and Mouse 3 Years Warranty
            </p>

            <div className="fb-row">
              <p className="question"> Have a Question? Contact Us </p>
              <span className="some-text">SKU D5515AI</span>
            </div>
          </div>

          {/* prettier-ignore */}
          <div className="image-container pos-rel">
            <Image src={imgUrl} layout="fill" objectFit="contain" quality={100} priority alt={'electronic device'}/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      product: getProductData(query.productId),
    },
  };
};
