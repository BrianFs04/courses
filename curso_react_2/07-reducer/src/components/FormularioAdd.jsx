import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioAdd = ({ dispatch }) => {
	const [data, setData] = useState({
		nombre: '',
		numero: '',
	});

	const { nombre, numero } = data;

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const actionAdd = {
		type: 'add',
		payload: {
			id: uuid(),
			nombre,
			numero,
			accion: 'eliminar',
		},
	};

	const handleAdd = () => {
		dispatch(actionAdd);
		setData({
			nombre: '',
			numero: '',
		});
	};

	return (
		<div className='container my-3'>
			<label className='mx-1 d-grid gap-2'>
				Nombre:{' '}
				<input
					name='nombre'
					type='text'
					value={nombre}
					className='form-control'
					autoComplete='off'
					onChange={handleChange}
				/>
			</label>
			<label className='mx-1 d-grid gap-2'>
				Número:{' '}
				<input
					name='numero'
					type='number'
					value={numero}
					className='form-control'
					autoComplete='off'
					onChange={handleChange}
				/>
			</label>
			<div className='mx-1 d-grid gap-2'>
				<button onClick={handleAdd} className='btn btn-success mt-3'>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default FormularioAdd;
