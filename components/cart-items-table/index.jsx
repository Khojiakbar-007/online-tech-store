import { DataGrid } from '@mui/x-data-grid';
import { useDebouncedCallback } from 'use-debounce';

import { columns } from './columns';
import { useCartContext } from '../../context-provider';
import {
  useRemoveWholeItemFromCart,
  useUpdateItemInCart,
} from '../../utils/context-utils';

function CartTable() {
  // calling all hooks here -->>
  const { cartItems } = useCartContext();
  const removeItem = useRemoveWholeItemFromCart();
  const updateItemInCart = useUpdateItemInCart();

  const updateCartDebouncedly = useDebouncedCallback(
    (id, quantity) => updateItemInCart(id, quantity),
    500
  );

  return (
    <>
      <div className="table-container" style={{ flexGrow: 1 }}>
        <DataGrid
          columns={columns(removeItem, updateCartDebouncedly)}
          rows={cartItems}
        />
      </div>
    </>
  );
}

export default CartTable;
