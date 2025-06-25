import { useContext } from 'react';

import CartContext from '../../store/Cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtn = useContext(CartContext)

  const cartItems = <ul className={classes['cart-items']}>{cartCtn.items.map((item) => (
    <li key={item.id} className={classes.item}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.amount}>x {item.amount}</div>
        <div className={classes.price}>N{(item.price * item.amount).toFixed(2)}</div>
      </div>
    </li>
  ))}</ul> || <p>No items in the cart.</p>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props. onClose}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
// This component is a placeholder for the Cart functionality.