import React, { useState } from "react";

const Temperatura = () => {
	const [temperatura, setTemperatura] = useState(19);

	const aumentar = () => {
		setTemperatura(temperatura + 1);
	};
	const disminuir = () => {
		setTemperatura(temperatura - 1);
	};
	return (
		<div className="container">
			<h2>La temperatura es: {temperatura}</h2>
			<p>{temperatura > 21 ? "Hace calorcito" : "Hace fresquito"}</p>
			<div className="container row ">
				<button
					className="btn btn-success btn-block"
					onClick={aumentar}
				>
					Aumentar temperatura
				</button>
				<button
					className="btn btn-danger btn-block"
					onClick={disminuir}
				>
					Disminuir temperatura
				</button>
			</div>
		</div>
	);
};

export default Temperatura;
