import React from 'react';
import useCheckout from '../hooks/useCheckout';
import classes from './Checkout.module.css';

const validateInput = (value) => value.trim() !== '';

const Checkout = (props) => {
	const {
		value: enteredName,
		isValid: nameIsValid,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlur,
		resetHandler: resetName,
		hasError: nameHasError,
	} = useCheckout(validateInput);

	let formIsValid = false;
	if (nameIsValid) {
		formIsValid = true;
	}

	const formConfirmHandler = (e) => {
		e.preventDefault();
		if (nameHasError) {
			return;
		}

		const formData = {
			name: enteredName,
		};

		console.log('This is fornData', formData);

		resetName();
	};

	let nameClassList = nameHasError
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;

	return (
		<form onSubmit={formConfirmHandler}>
			<div className={nameClassList}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onChange={nameChangeHandler}
					onBlur={nameBlur}
				/>
			</div>
			<div className={classes.control}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" />
			</div>
			<div className={classes.control}>
				<label htmlFor="busstop">Bus-Stop</label>
				<input type="text" id="busstop" />
			</div>
			<div className={classes.control}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" />
			</div>
			<button type="button" onClick={props.onCancel}>
				Cancel
			</button>
			<button disabled={!formIsValid}>Confirm</button>
		</form>
	);
};

export default Checkout;
