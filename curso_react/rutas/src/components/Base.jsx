import React, { useState, useEffect } from "react";

const Base = () => {
	const [nombre, setNombre] = useState("Pedro");
	useEffect(() => {
		setTimeout(() => {
			setNombre("Juan");
		}, 2000);
	});
	return (
		<div>
			<h1>URL base</h1>
			{nombre}
		</div>
	);
};

export default Base;
