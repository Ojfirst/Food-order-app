import { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	// This function is used to update the state of the cart based on the action type
	// It takes the current state and an action as arguments and returns the new state
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount; // Calculate the new total amount by adding the price of the item multiplied by its amount
		// This is the total amount of all items in the cart
		const existingCartItemIndex = state.items.findIndex(
			// Find the index of the item in the cart
			// This checks if the item being added is already in the cart
			(item) => item.id === action.item.id
		); // Check if an item is already part of items

		const getExcitingCartItem = state.items[existingCartItemIndex]; // Get the existing item from the cart using the index found above

		let updatedItems;

		if (getExcitingCartItem) {
			// If the item already exists in the cart, we update its amount
			const updatedItem = {
				// Create a new object with the updated amount
				...getExcitingCartItem,
				amount: getExcitingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item); // Generate a brand new state with concat() method
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		); // Check if an item is already part of items
		const getExcitingCartItem = state.items[existingCartItemIndex];
		const updateTotalAmount = state.totalAmount - getExcitingCartItem.price;

		let updatedItems;
		if (getExcitingCartItem.amount === 1) {
			// If the amount is 1, remove the item from the cart
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			// If the amount is more than 1, decrease the amount
			const updatedItem = {
				...getExcitingCartItem,
				amount: getExcitingCartItem.amount - 1, // Decrease the amount by 1
			};
			updatedItems = [...state.items]; // Create a copy of the items array
			updatedItems[existingCartItemIndex] = updatedItem; // Update the specific item
		}
		return {
			items: updatedItems, // Update the items array
			totalAmount: updateTotalAmount, // Update the total amount}
		};
	}

  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
	return defaultCartState; // Return the default state if no action matches
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	); // reusing default cart state

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item: item }); // forwarding to be recieved
	};

	const removeItemFromHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

	const clearCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	// cartState use in constructing this object
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler, // Point add function
		removeItem: removeItemFromHandler, // point to remove function
		clearCart: clearCartHandler, // point to clearCartunction
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
