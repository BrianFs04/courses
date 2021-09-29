interface General {
	(nombre: string, apellido: string, edad: number): void;
}

const generalUno: General = (
	nombre: string,
	apellido: string,
	edad: number
): void => {
	console.log(`${nombre} ${apellido} ${edad}`);
};

generalUno('Manuel', 'Muñoz', 30);
