import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/config-firebase';

export const googleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user: { uid, displayName } }) => {
				dispatch(login(uid, displayName));
			});
	};
};

export const emailAndPasswordLogin = (email, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user: { uid, displayName } }) => {
				dispatch(login(uid, displayName));
			});
	};
};

export const register = (email, username, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: username });
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch({
			type: types.logout,
		});
	};
};
