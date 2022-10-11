import { TextField } from '@mui/material';
import { useUpdateItemInCart } from '../../../utils/context-utils';
import { useDebouncedCallback } from 'use-debounce';

function QuantityField({ quantity, id }) {
  const updateItemInCart = useUpdateItemInCart();

  const updateCartDebouncedly = useDebouncedCallback(e => {
    updateItemInCart(id, e.target.value);
  }, 500);

  return (
    // prettier-ignore
    <p>
        {quantity}
      {/* <TextField onChange={updateCartDebouncedly} defaultValue={quantity} variant='filled' type="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', max: 999, min: 1 }}
      />  */}
    </p>
  );
}

export default QuantityField;
