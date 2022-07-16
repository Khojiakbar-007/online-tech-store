import CustomButton from '../shared/button';
import ShoppingCart from '../../public/icons/shopping-cart.svg';
import { useState } from 'react';
import { Popper, Fade, Badge } from '@mui/material';
import CartDropDown from '../cart-dropdown';
import { useCartContext } from '../../context-provider';
import { useUtilFunctions } from '../../utils/context-utils';

const CartIcon = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { cartItems } = useCartContext();
  const countItemsInCart = useUtilFunctions('countItemsInCart');

  const handleClick = e => {
    if (!anchorEl) setAnchorEl(e.currentTarget);
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <CustomButton onClick={handleClick} type="icon-button">
      <Badge badgeContent={countItemsInCart()} color="primary">
        <ShoppingCart />
      </Badge>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <span>
              <CartDropDown countItemsInCart={countItemsInCart} cartItems={cartItems} />
            </span>
          </Fade>
        )}
      </Popper>
    </CustomButton>
  );
};

export default CartIcon;
