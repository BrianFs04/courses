class Padre2 {
	protected nombre: string;

	constructor(nombre_: string) {
		this.nombre = nombre_;
	}
}

class Hijo2 extends Padre2 {
	public apellido: string;

	constructor(nombre_: string, apellido_: string) {
		super(nombre_);
		this.apellido = apellido_;
	}

	mostrarNombre(): void {
		console.log(this.nombre);
	}
}

const obj4 = new Hijo2('Manuel', 'Perez');
// No podrá acceder a nombre ya que es un atributo protegido
