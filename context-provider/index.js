import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartActionsContext = createContext();
export const useCartActionsContext = () => useContext(CartActionsContext);

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserActionsContext = createContext();
export const useUserActionsContext = () => useContext(UserActionsContext);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  console.log('isSignedIn: ', isSignedIn, 'userDetails: ', userDetails);
  const { status, data } = useSession();
  console.log('status: ', status);

  useEffect(() => {
    const savedCart = JSON.parse(global.localStorage?.getItem('cartItems'));
    setCartItems(prevCart =>
      prevCart?.length > 0 && savedCart ? prevCart : savedCart
    );
  }, []);

  useEffect(() => {
    global.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
