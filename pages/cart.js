import { useEffect, useRef } from 'react';
import CartTable from '../components/cart-items-table';
import { useCartContext } from '../context-provider';
import { useUtilFunctions } from '../utils/context-utils';

import Head from 'next/head';
import { defaultSep, defaultTitle, pageDescription } from '../shared/constants';

const CartPage = () => {
  const { cartItems } = useCartContext();
  const numberOfItems = cartItems.length;
  const tableContainerRef = useRef();

  // programmatically set height of Mui Table that has useless 0px height
  useEffect(() => {
    tableContainerRef.current.style.setProperty(
      '--table-height',
      `calc(${numberOfItems} * 170px + 56px)`
    );
  }, [tableContainerRef.current, numberOfItems]);

  const countTotalSum = useUtilFunctions('countTotalSum');

  return (
    <main id="cart-page">
      <Head>
        <meta name="description" content={`Cart ${pageDescription}`} />

        <title>{'Cart' + defaultSep + defaultTitle}</title>
      </Head>

      <div className="container-fluid">
        <h2>Shopping Cart</h2>

        <div className="items-table" ref={tableContainerRef}>
          <CartTable />
        </div>
        <h3 className="text-right full-width">
          Total: <span className="total-price">${countTotalSum()}</span>
        </h3>
      </div>
    </main>
  );
};

export default CartPage;
