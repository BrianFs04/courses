import React, { useState } from 'react';

const Button = ({ type, initial }) => {
	const [value, setValue] = useState(initial);
	const aumentar = () => {
		setValue((value) => value + 1);
	};
	return (
		<>
			<h2>Counter: {value}</h2>
			<button className={type} onClick={aumentar}>
				+1
			</button>
		</>
	);
};

export default Button;
