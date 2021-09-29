import React, { useState, useEffect } from 'react';

const Effect = () => {
	/* 	const [users, setUsers] = useState([]);
	const [id, setId] = useState(0);

	const getUsuarios = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		setUsers(data);
	};

	useEffect(() => {
		// No es recomendable que un efecto sea async
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	useEffect(() => {
		setUsers([
			{
				hola: 'Cambié el id',
			},
		]);
		console.log(users);
	}, [id]); */

	// Cleaning up a useEffect

	const [state, setState] = useState(0);

	const evento = (e) => {
		console.log('moviendo');
	};

	useEffect(() => {
		if (state === '123') {
			window.addEventListener('mousemove', evento);
		}

		return () => {
			window.removeEventListener('mousemove', evento);
		};
	}, [state]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Search
					</label>
					<input
						value={state}
						onChange={(e) => setState(e.target.value)}
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
};

export default Effect;
