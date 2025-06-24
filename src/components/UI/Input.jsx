import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input
				ref={ref}
				{...props.input} // Spread operator to pass all other props like type, value, onChange, etc.
			/>
		</div>
	);
});

export default Input;
