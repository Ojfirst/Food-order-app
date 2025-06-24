import CartContext from "./Cart-context";

const CartProvider = (props) => {

  const addItemToCartHandler = (item) => {};

  const removeItemFromHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler, // Point add function
    removeItem: removeItemFromHandler, // point to remove function
  }


  return <CartContext>{props.children}</CartContext>
}

export default CartProvider; 