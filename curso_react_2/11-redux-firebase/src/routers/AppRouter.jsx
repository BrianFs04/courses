import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppScreen from '../pages/AppScreen';
import { firebase } from '../firebase/config-firebase';
import { login } from '../actions/auth';
import PrivateRouter from './PrivateRouter';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';
import { loadData } from '../helpers/loadData';
import { leerRegistros } from '../actions/nomina';

const AppRouter = () => {
	const dispatch = useDispatch();

	const [log, setLog] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(login(user.uid, user.displayName));
				setLog(true);
				const nominaData = await loadData(user.uid);
				dispatch(leerRegistros(nominaData));
			} else {
				setLog(false);
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<PublicRouter path='/auth' log={log} component={AuthRouter} />
				<PrivateRouter exact path='/' log={log} component={AppScreen} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
