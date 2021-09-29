import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';

const Element = ({ data }) => {
	const { id, fecha, pago } = data;

	const dispatch = useDispatch();

	let fechaFormato;
	if (fecha.seconds) {
		fechaFormato = fecha.toDate().toLocaleDateString();
	} else {
		fechaFormato = fecha.toLocaleDateString();
	}

	const handleDelete = () => {
		dispatch(borrarRegistro(id));
	};

	return (
		<tr className='animate__animated animate__fadeInUp'>
			<td>{fechaFormato}</td>
			<td>${pago}</td>
			<td>
				<button onClick={handleDelete} className='btn red'>
					<i className='material-icons'>delete_forever</i>
				</button>
			</td>
		</tr>
	);
};

export default Element;
