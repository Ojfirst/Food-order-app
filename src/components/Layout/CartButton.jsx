import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/Cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';

const CartButon = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const badgeCtx = useContext(CartContext);

  const {items} = badgeCtx;
  
  const numberOfCartItems = items.reduce((acc, item) => {return acc + item.amount}, 0);

  // Add animation effect to cart on add items
  const btnClasess = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    console.log('timer 1',timer)

    // Cleaner function
    return () => {
      clearTimeout(timer)
      console.log('timer 2',timer)
    }
  }, [items]); 

	return (
		<button className={btnClasess} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default CartButon;
