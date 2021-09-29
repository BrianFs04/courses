import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = document.querySelector('#root');

if (root.hasChildNodes()) {
	hydrate(<App />, root);
} else {
	render(<App />, root);
}

serviceWorkerRegistration.register();

reportWebVitals();
