import produce from 'immer';
import { useMemo } from 'react';

import {
  useCartActionsContext,
  useCartContext,
  useUserActionsContext,
  useUserContext,
} from '../../context-provider';
import { allProductsNormalized } from '../../fake-data';

const getProductData = productId => {
  const product = allProductsNormalized[productId];

  return product;
};

// add item to cart

const useAddItemToCart = () => {
  const { setCartItems } = useCartActionsContext();
  const { cartItems } = useCartContext();

  const addToCart = (item, quantity) => {
    const itemInCart = cartItems.findIndex(it => it.id === item.id);

    if (itemInCart !== -1) {
      setCartItems(
        produce(cartItems, draftCart => {
          draftCart[itemInCart].quantity += quantity;
        })
      );
      // setCartItems(produce(cartItems, draftCart => void draftCart[itemInCart].quantity++));
      return;
    }

    setCartItems(
      produce(cartItems, draftCart => {
        draftCart.push({ ...item, quantity });
      })
    );
  };

  return addToCart;
};

const useUpdateItemInCart = (id, quantity) => {
  const { setCartItems } = useCartActionsContext();
  const { cartItems } = useCartContext();

  const updateItemInCart = (productId, quantity) => {
    const itemInCart = cartItems.findIndex(it => it.id === productId);

    if (itemInCart !== -1) {
      setCartItems(
        produce(cartItems, draftCart => {
          draftCart[itemInCart].quantity = quantity;
        })
      );
      // setCartItems(produce(cartItems, draftCart => void draftCart[itemInCart].quantity++));
      return;
    }

    console.error(
      new Error(
        'My Error! Developer Error! : error in updating item in cart, in context utils'
      )
    );
  };

  return updateItemInCart;
};

const useRemoveWholeItemFromCart = () => {
  const { setCartItems } = useCartActionsContext();
  const { cartItems } = useCartContext();

  const removeItemFromCart = id => {
    setCartItems(
      produce(cartItems, draftCart => {
        const itemToRemove = draftCart.findIndex(item => item.id === id);
        draftCart.splice(itemToRemove, 1);
      })
    );
  };

  return removeItemFromCart;
};

const useUtilFunctions = funcType => {
  const { cartItems } = useCartContext();

  const countItemsInCart = () =>
    useMemo(() => {
      // console.log('memoization is working');
      return cartItems.reduce((acc, item) => acc + +item.quantity, 0);
    }, [cartItems]);

  // prettier-ignore
  const countTotalSum = () => useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity * (+item.nowPrice.slice(1)), 0);
  }, [cartItems]);

  switch (funcType) {
    case 'countItemsInCart':
      return countItemsInCart;

    case 'countTotalSum':
      return countTotalSum;

    default:
      return null;
  }
};

const useLogOut = () => {
  const { isSignedIn } = useUserContext();
  const { setIsSignedIn, setUserDetails } = useUserActionsContext();

  const logOut = () => {
    if (!isSignedIn) return;
    setIsSignedIn(false);
    setUserDetails(null);
  };

  return logOut;
};

export {
  getProductData,
  useAddItemToCart,
  useUpdateItemInCart,
  useRemoveWholeItemFromCart,
  useUtilFunctions,
  useLogOut,
};
