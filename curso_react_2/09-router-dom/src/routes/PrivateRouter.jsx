import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				auth.log ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

export default PrivateRouter;
