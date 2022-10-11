import CustomButton from '../shared/button';
import ShoppingCart from '../../public/icons/shopping-cart.svg';
import { memo, useState } from 'react';
import { Badge, Menu } from '@mui/material';
import CartDropDown from '../cart-dropdown';
import { useCartContext } from '../../context-provider';
import { useUtilFunctions } from '../../utils/context-utils';

const CartIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { cartItems } = useCartContext();
  const countItemsInCart = useUtilFunctions('countItemsInCart');

  const handleClick = e => {
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton onClick={handleClick} type="icon-button">
        <Badge badgeContent={countItemsInCart()} color="primary">
          <ShoppingCart />
        </Badge>
      </CustomButton>

      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose} className='cart-menu-modal'>
        <CartDropDown
          countItemsInCart={countItemsInCart}
          cartItems={cartItems}
        />
      </Menu>
    </>
  );
};

export default memo(CartIcon);
