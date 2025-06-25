import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const [ValidAmount, setValidAmountt] = useState(true);
	const amountInputRef = useRef(); // Feriving user entered number

	const formSubmitHandler = (e) => {
		e.preventDefault();
		const enterValue = amountInputRef.current.value;
		const enteredAmountNumb = +enterValue; // convert string number to number
		if (
			enterValue.trim().length === 0 ||
			enteredAmountNumb < 1 ||
			enteredAmountNumb > 5
		) {
			setValidAmountt(false);
			return;
		}

		props.onAddToCart(enteredAmountNumb); // forward enter value to MealItem.jsx
	};

	return (
		<form className={classes.form} onSubmit={formSubmitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>

			<div>
				<button>+ Add</button>
			</div>
			{!ValidAmount && <p>Invalid amount, Enter value from (1-5)</p>}
		</form>
	);
};

export default MealItemForm;
