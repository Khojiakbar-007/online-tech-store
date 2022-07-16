import { useEffect, useRef } from 'react';
import CartTable from '../components/cart-items-table';
import { useCartContext } from '../context-provider';
import { useUtilFunctions } from '../utils/context-utils';

const CartPage = () => {
  const { cartItems } = useCartContext();
  const numberOfItems = cartItems.length;
  const tableContainerRef = useRef();
  useEffect(() => {
    tableContainerRef.current.style.setProperty(
        '--table-height',
        `calc(${numberOfItems} * 170px + 56px)`
      );
  }, [tableContainerRef.current, numberOfItems]);

  const countTotalSum = useUtilFunctions('countTotalSum');

  return (
    <main id="cart-page">
      <div style={{}} className="container-fluid">
        <h2>Shopping Cart</h2>

        <div
          className="items-table"
          ref={tableContainerRef}
        >
          <CartTable />
        </div>
        <h3
          className="text-right full-width" /* style={{ marginTop: `calc(${numberOfItems} * 140px)` }} */
        >
          Total: <span className='total-price'>${countTotalSum()}</span>
        </h3>
      </div>
    </main>
  );
};

export default CartPage;
