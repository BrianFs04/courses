// Define series de reglas, de atributos, funciones... etc..
interface Persona {
	//Atributos
	nombre: string; // Los argumentos son obligatorios

	//metodos
	// caminar(): void {
	//     console.log('Estoy caminando')
	// }
}
let nuevaPersona = { nombre: 'Manuel', velocidad: 23 };

const caminar = (persona: Persona): void => {
	console.log(`${persona.nombre} está caminando a ${persona.velocidad}km/h`);
};

caminar(nuevaPersona); // Manuel está caminando a 23km/h
