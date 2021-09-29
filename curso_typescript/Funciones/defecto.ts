// Parametros por defecto

const mostrarDatos = (nombre: string, apellido: string, edad: number = 24) => {
	console.log(
		`Se llama ${nombre}, su apellido es ${apellido}, su edad es ${edad}`
	);
};

mostrarDatos('Brian', 'Florez');
mostrarDatos('Brian', 'Florez', 21);
