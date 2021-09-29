import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { emailAndPasswordLogin, googleLogin } from '../actions/auth';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = data;

	const handleChange = (e) => {
		const value = e.target.value;

		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleGoogleLogin = () => {
		dispatch(googleLogin());
	};

	const hanldleEmailLogin = (e) => {
		e.preventDefault();

		if (email.trim() === '' || !email.trim().includes('@')) {
			return;
		}

		if (password.trim().length < 6) {
			return;
		}

		dispatch(emailAndPasswordLogin(email, password));

		setData({
			email: '',
			password: '',
		});
	};

	return (
		<div className='container animate__animated animate__zoomIn'>
			<h3>Login</h3>
			<hr />
			<div className='row container'>
				<form onSubmit={hanldleEmailLogin} className='col s12'>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>email</i>
							<input
								onChange={handleChange}
								value={email}
								name='email'
								id='icon_prefix1'
								className='materialize-textarea'
								type='email'
							/>
							<label htmlFor='icon_prefix1'>Email</label>
						</div>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>vpn_key</i>
							<input
								onChange={handleChange}
								value={password}
								name='password'
								id='icon_prefix2'
								className='materialize-textarea'
								type='password'
							/>
							<label htmlFor='icon_prefix2'>Password</label>
						</div>
					</div>
					<button
						className='waves-effect waves-light btn'
						type='submit'
					>
						Enviar
					</button>
					<hr />
					<GoogleButton type='dark' onClick={handleGoogleLogin} />
					<br />
					<Link to='/auth/register'>Register in the platform</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginScreen;
