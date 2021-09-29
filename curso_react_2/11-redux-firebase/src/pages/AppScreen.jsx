import React from 'react';
import { useSelector } from 'react-redux';
import Element from '../components/Element';
import FormAdd from '../components/FormAdd';
import Navbar from '../components/Navbar';

const AppScreen = () => {
	const { auth } = useSelector((state) => state);

	const data = useSelector((state) => state.nomina.data);

	return (
		<>
			<Navbar />
			<div className='container animate__animated animate__backInUp'>
				<h1 className='center'>Hola {auth.displayName}</h1>
				<hr />
				<br />
				<FormAdd />
				<br />
				<table>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Cantidad</th>
							<th>Borrar</th>
						</tr>
					</thead>
					<tbody>
						{data.map((elemento) => (
							<Element key={elemento.id} data={elemento} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AppScreen;
