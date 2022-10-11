import React from 'react';
import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAddItemToCart } from '../../utils/context-utils';

function ProductQuantity({ product }) {
  const { query } = useRouter();

  const { nowPrice } = product;
  const productWithId = useMemo(
    () => ({ ...product, id: query.productId }),
    [product]
  );

  const addToCart = useAddItemToCart();

  const [quantity, setQuantity] = useState(1);
  const handleChange = ({ target }) => setQuantity(Number(target.value) || '');

  const handleAddToCart = () => {
    if (Number.isFinite(quantity)) addToCart(productWithId, quantity);
  };
  return (
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
  );
}

export default ProductQuantity;
