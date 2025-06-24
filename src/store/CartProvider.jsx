import { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item); // Generate a brand new state with concat() method
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};


const CartProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState) // reusing default cart state

	const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item}) // forwarding to be recieved
  };

	const removeItemFromHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  // cartState use in constructing this object 
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler, // Point add function
		removeItem: removeItemFromHandler, // point to remove function
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
