import { useContext, useState } from 'react';

import CartItem from './CartItem';
import CartContext from '../../store/Cart-context';
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);

	const hasItems = cartCtx.items.length > 0; // Check if there are items in the cart

	const totalAmount = `N${cartCtx.totalAmount.toFixed(2)}`;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id); // This function removes an item from the cart by its id
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item); // This function adds an item to the cart
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/> //
			))}
		</ul>
	) || <p>No items in the cart.</p>;

	const modalAction = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Cancel
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCancel={props.onClose}/>}
			{!isCheckout && modalAction}
		</Modal>
	);
};

export default Cart;
// This component is a placeholder for the Cart functionality.
