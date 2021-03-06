import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import clienteAxios from '../config/axios';
const Cita = (props) => {
	const [cita, setCita] = useState([]);
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const verCita = () => {
			clienteAxios
				.get(`/pacientes/${id}`)
				.then((res) => setCita(res.data))
				.catch((error) => console.log(error));
		};
		verCita();
	}, [id]);

	// if (!props.cita) {
	//     props.history.push("/");
	//     return null;
	// }
	if (!cita) {
		history.goBack();
		return null;
	}
	// // Extraer por props
	// const {
	//     cita: { _id, nombre, fecha, hora, sintomas, propietario, telefono },
	// } = props;
	const { _id, nombre, fecha, hora, sintomas, propietario, telefono } = cita;

	// Elimina un registro
	const eliminarCita = (id) => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: 'Una cita eliminada no se puede recuperar',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.value) {
				// Alerta de eliminado
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

				// Eliminado de la base de datos
				clienteAxios
					.delete(`/pacientes/${id}`)
					.then((res) => {
						props.guardarConsultar(true);
						// Redireccionar
						history.push('/');
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	};

	return (
		<Fragment>
			<h1 className='my-5'>Nombre cita: {nombre}</h1>
			<div className='container mt-5 py-5'>
				<div className='row'>
					<div className='col-12 mb-5 d-flex justify-content-center'>
						<Link
							to={'/'}
							className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'
						>
							Volver
						</Link>
					</div>
					<div className='col-md-8 mx-auto'>
						<div className='list-group'>
							<div className='p-5 list-group-item list-group-item-action flex-column align-items-center'>
								<div className='d-flex w-100 justify-content-between mb-4'>
									<h3 className='mb-3'>{nombre}</h3>
									<small className='fecha-alta'>
										{fecha} - {hora}
									</small>
								</div>
								<p className='mb-0'>{sintomas}</p>
								<div className='contacto py-3'>
									<p>Propietario: {propietario}</p>
									<p>Teléfono: {telefono}</p>
								</div>
								<div className='d-flex'>
									<button
										type='button'
										className='text-uppercase py-2 px-5 font-weight-bold btn btn-danger col'
										onClick={() => eliminarCita(_id)}
									>
										Eliminar &times;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Cita;
