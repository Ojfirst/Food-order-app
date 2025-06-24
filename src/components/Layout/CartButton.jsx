import { useContext } from 'react';

import CartContext from '../../store/Cart-context';
import CartIcon from '../Cart/CartIcon';
import Classes from './CartButton.module.css';

const CartButon = (props) => {
	const badgeCtx = useContext(CartContext);

  const numberOfCartItems = badgeCtx.items.reduce((acc, item) => {return acc + item.amount}, 0);

	return (
		<button className={Classes.button} onClick={props.onClick}>
			<span className={Classes.icon}>
				<CartIcon />
			</span>
			<span>My Cart</span>
			<span className={Classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default CartButon;
