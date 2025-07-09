import { useContext, useState } from 'react';

import CartItem from './CartItem';
import CartContext from '../../store/Cart-context';
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import classes from './Cart.module.css';

const Cart = (props) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
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

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		try {
			const response = await fetch(
				'https://food-order-app-35b8f-default-rtdb.firebaseio.com/order.json',
				{
					method: 'POST',
					header: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
				}
			);
			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const data = await response.json();
			console.log('Cart Data:', data);
		} catch (err) {
      isSubmitting(false);
      throw new Error(err.message);
		}
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
			{isCheckout && (
				<Checkout onAddUserData={submitOrderHandler} onCancel={props.onClose} />
			)}
			{!isCheckout && modalAction}
		</Modal>
	);
};

export default Cart;
// This component is a placeholder for the Cart functionality.
