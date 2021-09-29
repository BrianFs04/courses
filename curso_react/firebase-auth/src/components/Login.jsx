import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const historial = useHistory();
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [error, setError] = useState(null);

	const registrarUsuario = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, pwd)
			.then((r) => {
				historial.push('/');
			})
			.catch((err) => {
				if (email.trim() === '') {
					setError('El campo email debe estar lleno');
				} else if (err.code === 'auth/invalid-email') {
					setError('Formato de email incorrecto');
				} else if (pwd.trim() === '') {
					setError('El campo contraseña debe estar lleno');
				} else if (err.code === 'auth/weak-password') {
					setError('La contraseña debe de tener 6 caracteres o más');
				}
			});
	};

	const loginUsuario = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, pwd)
			.then((r) => {
				historial.push('/');
			})
			.catch((err) => {
				if (email.trim() === '') {
					setError('El campo email debe estar lleno');
				} else if (err.code === 'auth/user-not-found') {
					setError('El usuario no existe');
				} else if (pwd.trim() === '') {
					setError('El campo contraseña debe estar lleno');
				} else if (err.code === 'auth/wrong-password') {
					setError('Contraseña incorrecta');
				}
			});
	};
	return (
		<div className='row mt-5'>
			<div className='col'></div>
			<div className='col d-grid gap-2'>
				<form
					onSubmit={registrarUsuario}
					action='GET'
					className='form-group d-grid'
				>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className='form-control'
						placeholder='Introduce el email'
						type='email'
					/>
					<input
						onChange={(e) => setPwd(e.target.value)}
						className='form-control mt-3'
						placeholder='Introduce la contraseña'
						type='password'
					/>
					<input
						className='btn btn-dark mt-4'
						value='Registrar el usuario'
						type='submit'
					/>
				</form>
				<button
					onClick={loginUsuario}
					className='btn btn-success mt-2'
					type='button'
				>
					Iniciar sesión
				</button>
				{error ? (
					<div className='alert alert-danger mt-4'>{error}</div>
				) : (
					<span></span>
				)}
			</div>
			<div className='col'></div>
		</div>
	);
};

export default Login;
