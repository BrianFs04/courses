class Animal1 {
	private nombre: string;
	private tamano: number;

	public constructor(_nombre: string, _tamano: number) {
		this.nombre = _nombre;
		this.tamano = _tamano;
	}

	public moverse(): void {
		console.log('Me estoy moviendo');
	}
}

const obj1 = new Animal('Serpiente', 2);
// Solo se pueden acceder a las propiedades públicas

class Conectar {
	#url: string; // también lo pone como privado
	x: number;
}

const ob = new Conectar();
