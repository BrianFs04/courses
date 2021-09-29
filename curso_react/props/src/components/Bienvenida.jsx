import React from "react";

const Bienvenida = (props) => {
	const { nombre, apellido } = props;
	return (
		<div>
			<h1>
				Bienvenido {nombre} {apellido}
			</h1>
		</div>
	);
};

export default Bienvenida;
