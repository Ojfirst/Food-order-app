import { Fragment } from 'react';

import CartButon from './CartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const image = {
  content: mealsImage,
  name: 'A table full of delicious food'
}

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Lagos Cafe</h1>
        <CartButon onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
        <img src={image.content} alt={image.name} />
      </div>
		</Fragment>
	);
};

export default Header;
