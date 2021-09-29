import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { userData } from '../helpers/userData';

const Home = () => {
	const { user, setUser } = useContext(UserContext);
	const handleLogin = () => {
		setUser(userData);
	};
	const handleLogout = () => {
		setUser(null);
	};
	return (
		<div className='container text-center mt-4'>
			<h1>Home section</h1>
			{console.log(user)}
			{!user ? (
				<button className='btn btn-success' onClick={handleLogin}>
					Login
				</button>
			) : (
				<button className='btn btn-danger' onClick={handleLogout}>
					Logout
				</button>
			)}
		</div>
	);
};

export default Home;
