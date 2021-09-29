import React, { useState } from "react";

const Formulario = () => {
	const [nombre, setNombre] = useState("");
	const [edad, setEdad] = useState("");
	const validar = (e) => {
		e.preventDefault();
		if (!nombre.trim() && !edad.trim()) {
			console.log("Debe llenar todos los campos");
		} else if (!nombre.trim()) {
			console.log("El campo 'nombre' está vacío");
		} else if (!edad.trim()) {
			console.log("El campo 'edad' está vacío");
		}
	};
	return (
		<div className="container">
			<form onSubmit={validar} className="form-group">
				<input
					placeholder="Introduce tu nombre"
					className="form-control mb-3"
					type="text"
					onChange={(e) => {
						setNombre(e.target.value);
					}}
				/>
				<input
					placeholder="Introduce tu edad"
					className="form-control mb-3"
					type="text"
					onChange={(e) => {
						setEdad(e.target.value);
					}}
				/>
				<input
					className="btn btn-info btn-block col-12"
					type="submit"
				/>
			</form>
		</div>
	);
};

export default Formulario;
