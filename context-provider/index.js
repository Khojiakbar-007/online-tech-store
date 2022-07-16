import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartActionsContext = createContext();
export const useCartActionsContext = () => useContext(CartActionsContext);

let savedCart;

try {
  savedCart = JSON.parse(global.localStorage?.getItem('cartItems'));
} catch (err) {
  console.log('ERROR: ', err.message, err);
}

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    setCartItems(prevCart => (prevCart.length > 0 ? prevCart : savedCart));
  }, []);

  useEffect(() => {
    global.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  console.log('--------------------------------------------');
  console.log('Context value: ', cartItems);
  console.log('--------------------------------------------');
  return (
    <CartActionsContext.Provider value={{ setCartItems, setIsCartVisible }}>
      <CartContext.Provider value={{ cartItems, isCartVisible }}>
        {children}
      </CartContext.Provider>
    </CartActionsContext.Provider>
  );
};

export default CartContextProvider;
