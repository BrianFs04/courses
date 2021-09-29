import React from 'react';

const TablaContactos = ({ contactos, dispatch }) => {
	const handleDelete = (id) => {
		const deleteAction = {
			type: 'delete',
			payload: id,
		};

		dispatch(deleteAction);
	};
	return (
		<table className='table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Número</th>
					<th>Acción</th>
				</tr>
			</thead>
			<tbody>
				{contactos.map(({ id, nombre, numero, accion }) => (
					<tr key={id}>
						<th>{id.split('-')[0]}</th>
						<td>{nombre}</td>
						<td>{numero}</td>
						<td>
							<button
								onClick={() => handleDelete(id)}
								className='btn btn-danger'
							>
								{accion}
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TablaContactos;
