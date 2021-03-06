import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';

const Navbar = () => {
	const history = useHistory();

	const { dispatch } = useContext(AuthContext);

	const handleLogout = (e) => {
		dispatch({ type: authTypes.logout });
		history.replace('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<h2 className='navbar-brand' href='#'>
					DB App
				</h2>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								aria-current='page'
								to='/men'
							>
								Men
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								aria-current='page'
								to='/women'
							>
								Women
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								aria-current='page'
								to='/search'
							>
								Search
							</NavLink>
						</li>
					</ul>
					<div className='d-flex flex-end'>
						<button
							className='btn btn-danger'
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
