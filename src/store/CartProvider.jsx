import { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		); // Check if an item is already part of items

		const getExcitingCartItem = state.items[existingCartItemIndex]; // Finds matching id

		let updatedItems;

		if (getExcitingCartItem) {
			const updatedItem = {
				...getExcitingCartItem,
				amount: getExcitingCartItem.amount + action.item.amount,
			};
			updatedItems = [ ...state.items ];
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
    }
      else {
        // If the amount is more than 1, decrease the amount
        const updatedItem = {
          ...getExcitingCartItem,
          amount: getExcitingCartItem.amount - 1, // Decrease the amount by 1
        };
        updatedItems = [ ...state.items ]; // Create a copy of the items array
        updatedItems[existingCartItemIndex] = updatedItem; // Update the specific item
      }
      return {
        items: updatedItems, // Update the items array
        totalAmount: updateTotalAmount, // Update the total amount}
      
    }
  }
	return defaultCartState; //
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

	// cartState use in constructing this object
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler, // Point add function
		removeItem: removeItemFromHandler, // point to remove function
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
