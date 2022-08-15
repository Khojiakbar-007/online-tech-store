import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import DropDownItem from './cart-item';

const DynamicScrollBar = dynamic(() => import('simplebar-react'), {
  suspense: true,
  ssr: false,
});

function CartItems({ cartItems }) {
  return (
    <>
      {cartItems.length > 0 ? (
        <Suspense fallback={<Items cartItems={cartItems} />}>
          {console.log('suspense is working')}
          <DynamicScrollBar className="scroll-bar">
            <Items cartItems={cartItems} />
          </DynamicScrollBar>
        </Suspense>
      ) : (
        <p className="drop-down__empty-cart-p">Your cart is empty.</p>
      )}
    </>
  );
}

const Items = ({ cartItems }) => (
  <>
    {cartItems.map(item => (
      <DropDownItem key={item.id} item={item} />
    ))}
  </>
);

export default CartItems;
