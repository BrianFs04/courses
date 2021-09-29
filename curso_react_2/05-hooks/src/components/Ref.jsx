import React, { useRef } from 'react';

const Ref = () => {
	const ref = useRef(null);
	const handleRef = () => {
		ref.current.value = 'Hola mundo';
		ref.current.select();
	};
	return (
		<>
			<h1 onClick={handleRef}>useRef</h1>
			<hr />
			<textarea placeholder='Escribe un mensaje...' ref={ref}></textarea>
		</>
	);
};

export default Ref;
