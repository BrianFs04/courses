import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () => {
	const [nombre, setNombre] = useState("");
	const [listaNombres, setListaNombres] = useState([]);
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = useState("");
	const [error, setError] = useState(null);

	const addNombre = (e) => {
		e.preventDefault();
		if (!nombre.trim()) {
			setError("El campo 'nombre' está vacío");
			return;
		}
		const nuevoNombre = {
			id: uniqid(),
			nombre,
		};
		setListaNombres([...listaNombres, nuevoNombre]);
		setNombre("");
		setError(null);
	};

	const deleteNombre = (id) => {
		const newArray = listaNombres.filter((item) => item.id !== id);
		setListaNombres(newArray);
	};

	const editar = (id, nombre) => {
		setModoEdicion(true);
		setNombre(nombre);
		setId(id);
	};

	const editarNombre = (e) => {
		e.preventDefault();
		if (!nombre.trim()) {
			setError("El campo 'nombre' está vacío");
			return;
		}
		const newArray = listaNombres.map((item) =>
			item.id === id ? { id, nombre } : item
		);
		setListaNombres(newArray);
		setModoEdicion(false);
		setNombre("");
		setError(null);
	};
	return (
		<div className="container mt-5">
			<h2>Aplicación de CRUD básica</h2>
			<div className="row mt-4">
				<div className="col">
					<h2>Listado de nombres</h2>
					<ul className="list-group">
						{listaNombres.map(({ id, nombre }) => (
							<li key={id} className="list-group-item">
								{nombre}
								<button
									onClick={() => deleteNombre(id)}
									className="btn btn-danger float-right"
								>
									Borrar
								</button>
								<button
									onClick={() => editar(id, nombre)}
									className="btn btn-info float-right"
								>
									Editar
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col">
					<h2>Formulario para añadir nombres</h2>
					<form
						onSubmit={(e) =>
							modoEdicion ? editarNombre(e) : addNombre(e)
						}
						className="form-group mt-3"
					>
						<input
							onChange={(e) => setNombre(e.target.value)}
							className="form-control mb-3"
							type="text"
							placeholder="Introduce el nombre"
							value={nombre}
						></input>
						<input
							className="btn btn-info btn-block"
							type="submit"
							placeholder="Registrar nombre"
							value={
								modoEdicion
									? "EDITAR NOMBRE"
									: "REGISTRAR NOMBRE"
							}
						></input>
					</form>
				</div>
				{error != null ? (
					<div className="mt-3 alert alert-danger">{error}</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};

export default ListadoNombres;
