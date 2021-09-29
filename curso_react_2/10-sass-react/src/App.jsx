import React from 'react';
import Button from './components/Button';

const App = () => {
	return (
		<div>
			<h1 className='title'>Hola desde SASS</h1>
			<hr />
			<ul>
				<li>
					<a href='#'>Google</a>
				</li>
				<li>
					<a href='#'>Facebook</a>
				</li>
				<li>
					<a href='#'>Instagram</a>
				</li>
			</ul>
			<hr />
			<Button type='btn btn-primary' initial={0} />
		</div>
	);
};

export default App;
