import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Usuario = () => {
	const [usuario, setUsuario] = useState([]);
	const { id } = useParams();
	const obtenerUsuario = async () => {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const users = await res.data;
		setUsuario(users);
	};
	useEffect(() => {
		obtenerUsuario();
	});
	return (
		<div>
			<h1>Usuario</h1>
			<h2>Nombre: {usuario.name}</h2>
			<h2>Email: {usuario.email}</h2>
			<h2>Telefono: {usuario.phone}</h2>
		</div>
	);
};

export default Usuario;
