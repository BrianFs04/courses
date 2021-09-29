import React, { useEffect, useReducer, useState } from 'react';
import TablaContactos from './TablaContactos';
import FormularioAdd from './FormularioAdd';
import { ContactosReducer } from '../reducers/ContactosReducer';

const init = () => {
	const contactos = localStorage.getItem('contactos');
	return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
	const [state, dispatch] = useReducer(ContactosReducer, [], init);
	const [formView, setFormView] = useState(false);

	useEffect(() => {
		// Crear un localStorage cuando se cargue la aplicación
		// Cada que el state cambie se va a actualizar
		localStorage.setItem('contactos', JSON.stringify(state));
	}, [state]);

	return (
		<div className='container mt-3'>
			<div className='d-flex justify-content-end'>
				{!formView ? (
					<button
						onClick={() => setFormView(!formView)}
						className='btn btn-success float-right'
					>
						+ Añadir Contacto
					</button>
				) : (
					<button
						onClick={() => setFormView(!formView)}
						className='btn btn-danger'
					>
						x Cerrar
					</button>
				)}
			</div>

			{formView && <FormularioAdd dispatch={dispatch} />}

			<TablaContactos contactos={state} dispatch={dispatch} />
		</div>
	);
};

export default Contactos;
