import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAf4daXx3-OyAtOB0kgt40E2ImLjcL-WW4',
	authDomain: 'authentication-77c1d.firebaseapp.com',
	projectId: 'authentication-77c1d',
	storageBucket: 'authentication-77c1d.appspot.com',
	messagingSenderId: '616945506099',
	appId: '1:616945506099:web:f035c9f01f95661a6dd046',
	measurementId: 'G-97GNLT8E8H',
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export { db };
