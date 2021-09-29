import { useState, useCallback } from 'react';

const useCounter = (initialValue, range = 1) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = useCallback(() => {
		setCounter((current) => current + 1);
	}, [setCounter]);

	const decrement = useCallback(() => {
		setCounter((current) => current - 1);
	}, [setCounter]);

	return [counter, increment, decrement];
};

export default useCounter;
