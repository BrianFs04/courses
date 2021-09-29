class Animal {
	nombre: string; // sin public sigue siendo public
	public tamano: number;

	public constructor(_nombre: string, _tamano: number) {
		this.nombre = _nombre;
		this.tamano = _tamano;
	}

	public moverse(): void {
		console.log('Me estoy moviendo');
	}
}

const obj = new Animal('Serpiente', 2);
// Puedo acceder a propiedades y métodos ya que son públicos
