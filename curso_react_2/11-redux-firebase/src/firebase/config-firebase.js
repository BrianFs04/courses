import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBLJ9U179Fbi3OW94TXz1CQXmrkzr_Ay0s',
	authDomain: 'crud-react-e477f.firebaseapp.com',
	projectId: 'crud-react-e477f',
	storageBucket: 'crud-react-e477f.appspot.com',
	messagingSenderId: '551177407326',
	appId: '1:551177407326:web:02ac8bea1c335046641dcf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
