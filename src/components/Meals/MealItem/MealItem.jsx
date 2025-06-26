import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/Cart-context';



const MealItem = (props) => {
 const cartItemCtx = useContext(CartContext);

	// Helper
	const price = `N${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartItemCtx.addItem({
      img: props.img,
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

	return (
		<li className={classes.meal}>
			<div>
        <img src={props.img} alt={props.name} className={classes.image} />
				<h3>{props.name}</h3>
				<div className={classes.description }>{props.description}</div>
        <div className={classes.price}>{price}</div>
			</div>
			<div>
        <MealItemForm  onAddToCart={addToCartHandler}/>
      </div>
		</li>
	);
};

export default MealItem;
