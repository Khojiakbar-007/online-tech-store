import MobileRow from '../components/cart-items-table/mobile-row';
import { useCartContext } from '../context-provider';

function CheckingAndLearningPage() {
  const { cartItems } = useCartContext();
  console.log('cart items in context: ', cartItems)

  return (
    <main>
      🧜🏻‍♂️ ᓚᘏᗢ 👈(ﾟヮﾟ👈) 🧜🏻‍♀️
      <h2>Nimadir</h2>
      <MobileRow data={cartItems[0] || {}} />
    </main>
  );
}

export default CheckingAndLearningPage;

