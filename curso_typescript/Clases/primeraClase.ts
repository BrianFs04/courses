class Vehiculo {
	marca: string;
	fecha: string;
	puertas: number;

	constructor(marca_: string, fecha_: string, puertas_: number) {
		this.marca = marca_;
		this.fecha = fecha_;
		this.puertas = puertas_;
	}

	acelerar(): void {
		console.log('Ojo que acelero');
	}

	frenar(): void {
		console.log('Ojo que freno');
	}
}

const coche = new Vehiculo('Ford', '12/07/2018', 4);
coche.marca; // Propiedades
coche.acelerar(); // Métodos
