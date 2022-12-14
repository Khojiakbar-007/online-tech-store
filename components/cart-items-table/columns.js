import DeleteIcon from '../../public/icons/delete--big.svg';
import { TextField } from '@mui/material';
import Image from 'next/image';

export const columns = (removeItem, updateCartDebouncedly) => [
  {
    field: 'imgUrl',
    headerName: 'Item',
    renderCell: params => {
      return (
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
            paddingTop: '100%',
            width: '120px'
          }}
        >
          <Image
            // style={{ marginLeft: '-18px' }}
            layout="fill"
            objectPosition="center"
            objectFit="contain"
            src={params.row.imgUrl}
            alt="tech item"
          />
        </span>
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
      return (
        <TextField onChange={(e) => updateCartDebouncedly(params.row.id, e.target.value)} variant='filled' type="number"
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
