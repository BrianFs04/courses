let persona = { altura: 2, peso: 120 };
let persona2 = { altura: 1.8, peso: 130, nombre: 'Juan' };
const mostratPersona = (persona) => {
    const { altura, peso, nombre } = persona;
    let mediaPeso = altura / peso;
    if (nombre) {
        return `${nombre} tiene una media de ${mediaPeso}`;
    }
    return `No sé quien es, tiene una media de ${mediaPeso}`;
};
console.log(mostratPersona(persona));
console.log(mostratPersona(persona2));
