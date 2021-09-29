import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {
	const dispatch = useDispatch();

	const [viewForm, setViewForm] = useState(false);
	const [cantidadPago, setCantidadPago] = useState({
		precioHora: 0,
		horas: 0,
	});

	const { precioHora, horas } = cantidadPago;

	const handleAdd = () => {
		setViewForm(!viewForm);
	};

	const handleChange = (e) => {
		setCantidadPago({
			...cantidadPago,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = () => {
		const cantidadFinal = precioHora * horas;
		dispatch(crearRegistro(cantidadFinal));
		setCantidadPago({
			precioHora: 0,
			horas: 0,
		});
	};

	return (
		<div>
			{!viewForm ? (
				<button onClick={handleAdd} className='btn green'>
					Agregar
				</button>
			) : (
				<button onClick={handleAdd} className='btn red'>
					Cerrar
				</button>
			)}

			{viewForm && (
				<div className='animate__animated animate__fadeIn'>
					<div className='input-field col s12'>
						<label htmlFor='icon-prefix1'>Pago por hora</label>
						<input
							type='text'
							placeholder='Ingresa cantidad de pago por horas'
							value={precioHora}
							id='icon-prefix1'
							onChange={handleChange}
							name='precioHora'
						/>
					</div>
					<div className='input-field col s12'>
						<label htmlFor='icon-prefix2'>Horas laboradas</label>
						<input
							type='text'
							placeholder='Ingresa cantidad de horas'
							value={horas}
							id='icon-prefix2'
							onChange={handleChange}
							name='horas'
						/>
					</div>

					<button onClick={handleSave} className='btn orange'>
						Calcular y guardar
					</button>
				</div>
			)}
		</div>
	);
};

export default FormAdd;
