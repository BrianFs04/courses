import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Menu = () => {
	const historial = useHistory();
	const [log, setLog] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setLog(user.email);
			}
		});
	}, []);
	const cerrarSesion = () => {
		auth.signOut();
		setLog(null);
		historial.push('/');
	};
	return (
		<div>
			<nav className='navbar navbar-expand navbar-dark bg-dark'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Inicio
						</Link>
					</li>
					{!log ? (
						<li>
							<Link className='nav-link' to='/login'>
								Login
							</Link>
						</li>
					) : (
						<span></span>
					)}
					<li>
						{log ? (
							<li>
								<Link className='nav-link' to='/admin'>
									Admin
								</Link>
							</li>
						) : (
							<span></span>
						)}
					</li>
				</ul>
				{log ? (
					<button
						onClick={cerrarSesion}
						className='btn btn-danger mr-auto'
						type='button'
					>
						Cerrar sesión
					</button>
				) : (
					<span></span>
				)}
			</nav>
		</div>
	);
};

export default Menu;
