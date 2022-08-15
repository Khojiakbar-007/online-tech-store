import { useUtilFunctions } from '../../utils/context-utils';
import SimpleButton from '../shared/button/simple-button';
import CartItems from './cart-items';

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
        <CartItems cartItems={cartItems}/>
      </div>

      <div className="drop-down__total">
        Total: <strong>${countTotalSum()}</strong>
      </div>
    </div>
  );
};

export default CartDropDown;
