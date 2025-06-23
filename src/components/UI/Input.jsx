import classes from './Input.module.css';

const Input = (props) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input
				{...props.input} // Spread operator to pass all other props like type, value, onChange, etc.
			/>
		</div>
	);
};

export default Input;
