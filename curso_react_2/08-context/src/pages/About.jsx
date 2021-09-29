import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const About = () => {
	const { user } = useContext(UserContext);
	return (
		<div className='container text-center mt-4'>
			<h1>About Section</h1>
			{!user ? (
				<h2 className='text-danger'>Please login</h2>
			) : (
				<div>
					<h3>
						Name: {user.data.first_name} {user.data.last_name}
					</h3>
					<h2>Email: {user.data.email}</h2>
					<img
						src={user.data.avatar}
						alt={user.data.id}
						width='150'
						height='150'
					/>
				</div>
			)}
		</div>
	);
};

export default About;
