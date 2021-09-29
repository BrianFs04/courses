// rafc snippet para crear la estructura básica de un componente
import React, { Fragment, useState } from "react";

export const Contador = () => {
	const [numero, setNumero] = useState(0);
	const aumentar = () => {
		setNumero(numero + 1);
	};
	const reducir = () => {
		setNumero(numero - 1);
	};
	return (
		<Fragment>
			<h2>Cantidad del contador: {numero}</h2>
			<button onClick={aumentar}>Aumentar</button>
			<button onClick={reducir}>Reducir</button>
		</Fragment>
	);
};
