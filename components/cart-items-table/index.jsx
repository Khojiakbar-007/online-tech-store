import { DataGrid } from '@mui/x-data-grid';

import { columns } from './columns';
import { useCartContext } from '../../context-provider';
import { useRemoveWholeItemFromCart } from '../../utils/context-utils';

function CartTable() {
  const { cartItems } = useCartContext();
  const removeItem = useRemoveWholeItemFromCart();

  return (
    <>
      <div className='table-container' style={{ flexGrow: 1 }}>
        <DataGrid columns={columns(removeItem)} rows={cartItems} />
      </div>
    </>
  );
}

export default CartTable;
