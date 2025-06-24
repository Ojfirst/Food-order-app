import CartIcon from "../Cart/CartIcon";

import Classes from './CartButton.module.css';



const CartButon = (props) => {
	return (
		<button className={Classes.button} onClick={props.onClick}>
			<span className={Classes.icon}>
        <CartIcon />
      </span>
			<span>My Cart</span>
			<span className={Classes.badge}>3</span>
		</button>
	);
};

export default CartButon;
