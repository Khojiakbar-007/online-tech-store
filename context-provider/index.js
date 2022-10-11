import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartActionsContext = createContext();
export const useCartActionsContext = () => useContext(CartActionsContext);

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserActionsContext = createContext();
export const useUserActionsContext = () => useContext(UserActionsContext);

// let savedCart;
// if (typeof window !== 'undefined')
//   savedCart = JSON.parse(global.localStorage.getItem('cartItems'));

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  // console.log('isSignedIn: ', isSignedIn, 'userDetails: ', userDetails);
  const { status, data } = useSession();
  // console.log('status: ', status);

  const variable = useRef();

  // Get saved cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(global.localStorage?.getItem('cartItems'));
    if (savedCart)
      setCartItems(prevCart =>
        prevCart?.length > 0 && savedCart ? prevCart : savedCart
      );
  }, []);

  // Save cart to localStorage on updates, not on mount
  useEffect(() => {
    if (!variable.current) {
      variable.current = true;
      return;
    }
    global.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Set user details i f authenticated, if no => clear
  useEffect(() => {
    if (status === 'authenticated') {
      setIsSignedIn(true);
      setUserDetails(data.user);
    } else;
    if (status === 'unauthenticated') {
      setIsSignedIn(false);
      setUserDetails(null);
    }
  }, [status, data]);

  // console.log('--------------------------------------------');
  // console.log('Context value: ', cartItems);
  // console.log('--------------------------------------------');
  return (
    <UserActionsContext.Provider value={{ setIsSignedIn, setUserDetails }}>
      <UserContext.Provider value={{ isSignedIn, userDetails }}>
        <CartActionsContext.Provider value={{ setCartItems, setIsCartVisible }}>
          <CartContext.Provider value={{ cartItems, isCartVisible }}>
            {children}
          </CartContext.Provider>
        </CartActionsContext.Provider>
      </UserContext.Provider>
    </UserActionsContext.Provider>
  );
};

export default CartContextProvider;
