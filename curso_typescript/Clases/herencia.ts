class Padre {
	nombre: string;
	edad: number;

	constructor(nombre_: string, edad_: number) {
		this.nombre = nombre_;
		this.edad = edad_;
	}

	mostrarNombre(): void {
		console.log(`El nombre del padre es ${this.nombre}`);
	}
}

class Hijo extends Padre {
	apellido: string;

	constructor(nombre_: string, edad_: number, apellido_: string) {
		super(nombre_, edad_);
		this.apellido = apellido_;
	}

	mostrarNombreHijo(): void {
		console.log(`El nombre del hijo es ${this.nombre}`);
	}
}

const padre1 = new Padre('Juan', 34);
const hijo1 = new Hijo('Manuel', 22, 'Muñoz');

hijo1.mostrarNombreHijo();
