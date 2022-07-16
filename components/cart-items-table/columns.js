import DeleteIcon from '../../public/icons/delete--big.svg';
import { TextField } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { useUpdateItemInCart } from '../../utils/context-utils';

export const columns = removeItem => [
  {
    field: 'imgUrl',
    headerName: 'Item',
    renderCell: params => {
      return (
        <img
          // style={{ marginLeft: '-18px' }}
          src={params.row.imgUrl}
          width="120px"
        />
      );
    },
  },
  {
    field: 'title',
    headerName: '',
    // valueGetter: params => params.row.title,
  },
  {
    field: 'nowPrice',
    headerName: 'Price',
    cellClassName: () => 'MuiDataGrid-cell--bold-text',
    // getCellClassName: () => 'MuiDataGrid-cell--bold-text',
  },
  {
    field: 'quantity',
    headerName: 'Qty',
    // prettier-ignore
    renderCell: (params) => {
      const updateItemInCart = useUpdateItemInCart();

      const debouncedUpdate = useDebouncedCallback((quantity) => {
        updateItemInCart(params.row.id, quantity);
      }, 500)

      return (
        <TextField variant='filled' type="number" onChange={(e) => debouncedUpdate(e.target.value)} 
          defaultValue={params.row.quantity} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', max: 999, min: 1/* , value: quantity */ }}
        />
      )
    },
  },
  {
    field: 'someField',
    headerName: 'Subtotal',
    cellClassName: () => 'MuiDataGrid-cell--bold-text',
    valueGetter: params =>
      '$' + params.row.quantity * +params.row.nowPrice.slice(1),
  },
  {
    field: 'actions',
    headerName: '',
    renderCell: params => {
      return (
        <DeleteIcon
          onClick={() => removeItem(params.row.id)}
          style={{ cursor: 'pointer' }}
        />
      );
    },
  },
];
