import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
// import Image from 'next/image';
import { getProductData, useAddItemToCart } from '../../utils/context-utils';

function ProductPage({ product }) {
  const { query } = useRouter();

  const { nowPrice, title, imgUrl } = product;
  const productWithId = useMemo(
    () => ({ ...product, id: query.productId }),
    [product]
  );

  const addToCart = useAddItemToCart();

  const [quantity, setQuantity] = useState(1);
  const handleChange = ({ target }) => setQuantity(Number(target.value) || '');

  const handleAddToCart = () => {
    if (Number.isFinite(quantity)) addToCart(productWithId, quantity);
    // else
  };

  return (
    <main id="product-page">
      <div className="price-box">
        <div className="container-fluid fb-row">
          <span className="about">About Product</span>

          <div className="price-quantity fb-row">
            <span className="price">
              Price: <strong>{nowPrice}</strong>
            </span>

            {/* prettier-ignore */}
            <TextField variant="filled" type="number" onChange={handleChange} 
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', max: 999, min: 1, value: quantity }}
            />

            {/* prettier-ignore */}
            <Button
              sx={{ color: "black", textTransform: "capitalize", backgroundColor: 'var(--color-3)', height: '43px',
              width: '140px', color: 'var(--color-11)', borderRadius: '50px'}}
              variant="contained"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <section id="product-detail">
        <div className="container-fluid--2 fb-row--left fb--align-items--center">
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
          <div className="image-container">
            {/* <Image src={imgUrl} alt={'electronic device'} width={300} height={300} quality={100} priority/> */}
            <img src={imgUrl} alt={'electronic device'} height={300}/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      product: getProductData(query.productId),
    },
  };
};
