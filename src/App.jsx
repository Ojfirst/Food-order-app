import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';



function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const removeCartHandler = () => {
    setShowCart(false);
  }

	return (
		<CartProvider>
      {showCart && <Cart onClose={removeCartHandler}/>}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
