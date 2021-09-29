abstract class Father {
	abstract caminar(): void;
	abstract gatear(): void;

	saludar(saludo: string): string {
		return saludo;
	}
}

class Son extends Father {
	// No se pueden heredar los métodos abstractos
	caminar(): void {
		console.log();
	}

	gatear(): void {
		console.log();
	}
}

class anotherClass extends Father {
	caminar(): void {
		console.log();
	}

	gatear(): void {
		console.log();
	}
}
