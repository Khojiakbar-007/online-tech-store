import SimpleBar from 'simplebar-react';
import Link from 'next/link';

import { useUtilFunctions } from '../../utils/context-utils';
import SimpleButton from '../shared/button/simple-button';
import DropDownItem from './cart-item';

const CartDropDown = ({ cartItems, countItemsInCart }) => {
  const countTotalSum = useUtilFunctions('countTotalSum');

  return (
    <div id="cart-dropdown" className="drop-down">
      <div className="drop-down__header fb-col">
        <h3>My Cart</h3>

        <p className="drop-down__header__count">
          {countItemsInCart()} {countItemsInCart() === 1 ? 'item' : 'items'} in
          cart
        </p>

        <SimpleButton href={'/cart'} inverted fullWidth>
          View or Edit Your Cart
        </SimpleButton>
      </div>

      <div className="drop-down__cart-items">
        {cartItems.length > 0 ? (
          <SimpleBar className="scroll-bar">
            {cartItems.map(item => (
              <DropDownItem key={item.id} item={item} />
            ))}
          </SimpleBar>
        ) : (
          <p className="drop-down__empty-cart-p">Your cart is empty.</p>
        )}
        {/* <div className="drop-down__cart-items__item">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </div>
        <div className="drop-down__cart-items__item">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
        </div> */}
      </div>

      <div className="drop-down__total">
        Total: <strong>${countTotalSum()}</strong>
      </div>
    </div>
  );
};

export default CartDropDown;
