import React from 'react';
import useCounter from './hooks/useCounter';

const Custom = () => {
	const [counter, increment, decrement] = useCounter(23);

	return (
		<div>
			<h1>CustomHooks: {counter}</h1>
			<hr />
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	);
};

export default Custom;
