import React, { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};
const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === 'BLUR') {
		return { isTouched: true, value: state.value };
	}
	if (action.type === 'RESET') {
		return { value: '', isTouched: false };
	}
};

const useCheckout = (validateInput) => {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const inputIsValid = validateInput(inputState.value);
	const hasError = !inputIsValid && inputState.isTouched;

	const inputChangeHandler = (e) => {
		dispatch({ type: 'INPUT', value: e.target.value });
	};

	const inputBlurHandler = () => {
		dispatch({ type: 'BLUR' });
	};

	const resetHandler = () => {
		dispatch({ type: 'RESET' });
	};

	return {
		value: inputState,
		isValid: inputIsValid,
		inputChangeHandler,
		inputBlurHandler,
		resetHandler,
		hasError,
	};
};

export default useCheckout;
