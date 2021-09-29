let permiso: boolean = true;

class Persona {
	public nombre: string;

	constructor(nombre: string) {
		this.nombre = nombre;
	}

	get getNombre(): string {
		return this.nombre;
	}

	set setNombre(nombre: string) {
		if (permiso) {
			this.nombre = nombre;
		} else {
			console.log('No tienes permisos para esto');
		}
	}
}

const objeto = new Persona('Brian');
console.log(objeto.getNombre); // Brian
objeto.setNombre = 'Jose';
console.log(objeto.getNombre); // Jose
permiso = false;
objeto.setNombre = 'Maria'; // No tienes permisos para esto
