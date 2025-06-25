import { useContext } from 'react';

import CartContext from '../../store/Cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const hasItems = cartCtx.items.length > 0;

	const totalAmount = `N${cartCtx.totalAmount.toFixed(2)}`;

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<li key={item.id}>
					<div>
						<h3>{item.name}</h3>
						<div>x {item.amount}</div>
						<div>N{(item.price * item.amount).toFixed(2)}</div>
					</div>
				</li>
			))}
		</ul>
	) || <p>No items in the cart.</p>;

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Cancel
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
// This component is a placeholder for the Cart functionality.
