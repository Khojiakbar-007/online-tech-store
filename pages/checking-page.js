import produce from 'immer';
import { useCartActionsContext } from '../context-provider';

const baseState = [
  {
    title: 'Learn TypeScript',
    done: true,
  },
  {
    title: 'Try Immer',
    done: false,
  },
];

const nextState = produce(baseState, draftState => {
  draftState.push({ title: 'Tweet about it' });
  draftState[1].done = true;
});

console.log('nextState: ', nextState);

const CheckingPage = () => {
  const { setIsCartVisible } = useCartActionsContext();

  const handleClick = () => {
    setIsCartVisible(prevCart => !prevCart);
  };
  return (
    <main>
      <h1>Welcome to Developers Checking Page!</h1>
      <p>
        There is nothing you can do here, we use this page for ourselves for{' '}
        <code>debugging</code>!
        <button onClick={handleClick}>Checking Context</button>
      </p>
    </main>
  );
};

export default CheckingPage;
