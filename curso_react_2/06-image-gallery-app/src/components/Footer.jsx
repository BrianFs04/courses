import React from 'react';

const Footer = () => {
	return (
		<nav className='navbar navbar-dark bg-primary'>
			<div className='container-fluid justify-content-center'>
				<p className='navbar-brand h1'>
					Brian Florez - &copy; {new Date().getFullYear()}
				</p>
			</div>
		</nav>
	);
};

export default Footer;
