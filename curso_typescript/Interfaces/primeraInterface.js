let nuevaPersona = { nombre: 'Manuel', velocidad: 23 };
const caminar = (persona) => {
    console.log(`${persona.nombre} está caminando a ${persona.velocidad}km/h`);
};
caminar(nuevaPersona); // Manuel está caminando a 23km/h
