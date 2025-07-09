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

	const {
		value: enteredStreetName,
		isValid: streetIsValid,
		inputChangeHandler: streetChangeHandler,
		inputBlurHandler: streetBlur,
		resetHandler: resetStreet,
		hasError: streetNameHasError,
	} = useCheckout(validateInput);

	const {
		value: enteredBusStopName,
		isValid: busStopIsValid,
		inputChangeHandler: busStopChangeHandler,
		inputBlurHandler: busStopBlur,
		resetHandler: resetBusStop,
		hasError: busStopNameHasError,
	} = useCheckout(validateInput);

	const {
		value: enteredCityName,
		isValid: cityIsValid,
		inputChangeHandler: cityChangeHandler,
		inputBlurHandler: cityBlur,
		resetHandler: resetCity,
		hasError: cityNameHasError,
	} = useCheckout(validateInput);

	let formIsValid = false;
	if (nameIsValid && streetIsValid && busStopIsValid && cityIsValid) {
		formIsValid = true;
	}

	const formConfirmHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) {
			nameBlur();
			streetBlur();
			busStopBlur();
			cityBlur();
			return;
		}

		const formData = {
			name: enteredName,
			street: enteredStreetName,
			busStop: enteredBusStopName,
			city: enteredCityName,
		};

		console.log('This is fornData', formData);

		resetName();
		resetStreet();
		resetBusStop();
		resetCity();
	};

	let nameClassList = nameHasError
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;

	let streetNameClassList = streetNameHasError
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;

	let busStopNameClassList = busStopNameHasError
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;

	let cityNameClassList = cityNameHasError
		? `${classes.control} ${classes.invalid}`
		: `${classes.control}`;

	return (
		<form className={classes.form} onSubmit={formConfirmHandler}>
			<div className={nameClassList}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onChange={nameChangeHandler}
					onBlur={nameBlur}
				/>
				{nameHasError && <p className={classes.error}>Plaese enter a Valid name!</p>}
			</div>
			<div className={streetNameClassList}>
				<label htmlFor="street">Street</label>
				<input
					type="text"
					id="street"
					value={enteredStreetName}
					onChange={streetChangeHandler}
					onBlur={streetBlur}
				/>
				{streetNameHasError && <p className={classes.error}>Please enter a valid street name!</p>}
			</div>
			<div className={busStopNameClassList}>
				<label htmlFor="busstop">Bus-Stop</label>
				<input
					type="text"
					id="busstop"
					value={enteredBusStopName}
					onChange={busStopChangeHandler}
					onBlur={busStopBlur}
				/>
				{busStopNameHasError && <p className={classes.error}>Please enter a valid bus-stop name!</p>}
			</div>
			<div className={cityNameClassList}>
				<label htmlFor="city">City</label>
				<input
					type="text"
					id="city"
					value={enteredCityName}
					onChange={cityChangeHandler}
					onBlur={cityBlur}
				/>
        {cityNameHasError && <p className={classes.error}>Please enter a valid city address!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
