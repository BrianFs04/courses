import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';

const App = () => {
	const [modoEdicion, setModoEdicion] = useState(null);
	const [idUsuario, setIdUsuario] = useState('');
	const [nombre, setNombre] = useState('');
	const [phone, setPhone] = useState('');
	const [usuarios, setUsuarios] = useState([]);
	const [error, setError] = useState(null);
	const [msg, setMsg] = useState(null);

	useEffect(() => {
		mostrarLista();
	}, []);

	const setUsuario = async (e) => {
		e.preventDefault();
		if (nombre.trim() === '' && phone.trim() === '') {
			setError('Ambos campos deben estar llenos');
			msgTime(setError);
			return;
		} else if (nombre.trim() === '') {
			setError('El campo nombre está vacío');
			msgTime(setError);
			return;
		} else if (phone.trim() === '') {
			setError('El campo número está vacío');
			msgTime(setError);
			return;
		}

		const usuario = {
			nombre,
			phone,
		};
		try {
			await db.collection('agenda').add(usuario);
			setMsg('Añadido');
			msgTime(setMsg);
			await mostrarLista();
		} catch (err) {
			console.log(err);
		}
		setNombre('');
		setPhone('');
	};

	const msgTime = (callback) => {
		setTimeout(() => {
			callback(null);
		}, 2500);
	};

	const borrarUsuario = async (id) => {
		try {
			db.collection('agenda').doc(id).delete();
			await mostrarLista();
		} catch (err) {
			console.log(err);
		}
	};

	const mostrarLista = async () => {
		const { docs } = await db.collection('agenda').get();
		const newArray = docs.map((item) => ({
			id: item.id,
			...item.data(),
		}));
		setUsuarios(newArray);
	};

	const pulsarActualizar = async (id) => {
		try {
			const data = await db.collection('agenda').doc(id).get();
			const { nombre, phone } = data.data();
			setNombre(nombre);
			setPhone(phone);
			setIdUsuario(id);
			setModoEdicion(true);
		} catch (err) {
			console.log(err);
		}
	};

	const setUpdate = async (e) => {
		e.preventDefault();
		if (nombre.trim() === '' && phone.trim() === '') {
			setError('Ambos campos deben estar llenos');
			msgTime(setError);
			return;
		} else if (nombre.trim() === '') {
			setError('El campo nombre está vacío');
			msgTime(setError);
			return;
		} else if (phone.trim() === '') {
			setError('El campo número está vacío');
			msgTime(setError);
			return;
		}

		const updatedUser = {
			nombre,
			phone,
		};

		try {
			await db.collection('agenda').doc(idUsuario).set(updatedUser);
			setMsg('Editado');
			msgTime(setMsg);
			await mostrarLista();
		} catch (err) {
			console.log(err);
		}
		setNombre('');
		setPhone('');
		setIdUsuario('');
		setModoEdicion(false);
	};

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col'>
					<h2 className='text-center'>Formulario de Usuario</h2>
					<form
						onSubmit={modoEdicion ? setUpdate : setUsuario}
						className='form-group mt-4 d-grid gap-2'
					>
						<input
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							className='form-control'
							placeholder='Introduce tu nombre'
							type='text'
						/>
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className='form-control mt-3'
							placeholder='Introduce el numero'
							type='text'
						/>
						{modoEdicion ? (
							<input
								type='submit'
								value='Editar'
								className='btn btn-secondary mt-2'
							/>
						) : (
							<input
								type='submit'
								value='Registrar'
								className='btn btn-dark mt-2'
							/>
						)}
					</form>
					{error ? (
						<div className='alert alert-danger mt-4 text-center'>
							{error}
						</div>
					) : (
						<span></span>
					)}
					{msg ? (
						<div className='alert alert-success mt-4 text-center'>
							{msg}
						</div>
					) : (
						<span></span>
					)}
				</div>
			</div>
			<div className='col mt-5'>
				<h2 className='text-center'>Lista de tu agenda</h2>
				<ul className='list-group mt-3'>
					{usuarios.length !== 0 ? (
						usuarios.map((usuario) => (
							<li
								key={usuario.id}
								className='list-group-item mt-2 d-flex align-items-center'
							>
								<div className='ms-3 me-5'>
									<div className='fw-bold'>Nombre</div>
									{usuario.nombre}
								</div>
								<div className='ms-3 me-auto'>
									<div className='fw-bold'>Número</div>
									{usuario.phone}
								</div>
								<button
									onClick={(id) =>
										pulsarActualizar(usuario.id)
									}
									type='button'
									className='btn btn-primary float-right me-2'
								>
									Actualizar
								</button>
								<button
									onClick={(id) => borrarUsuario(usuario.id)}
									type='button'
									className='btn btn-danger float-right'
								>
									x
								</button>
							</li>
						))
					) : (
						<span className=''>No hay usuarios en tu agenda</span>
					)}
				</ul>
			</div>
		</div>
	);
};

export default App;
