import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[{
    id: 'c1',
    name: 'Sushi',
    amount: 2,
    price: 12.99
  }].map((item) => (
    <li key={item.id} className={classes.item}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.amount}>x {item.amount}</div>
        <div className={classes.price}>N{(item.price * item.amount).toFixed(2)}</div>
      </div>
    </li>
  ))}</ul> || <p>No items in the cart.</p>;

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Cancel</button>
        <button className={classes.button}></button>
      </div>
    </div>
  );
}

export default Cart;
// This component is a placeholder for the Cart functionality.