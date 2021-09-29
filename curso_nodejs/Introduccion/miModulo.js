let miModulo = {
    saludo: () => {
        return "Buenos días!";
    },
    despedida: () => {
        return "Adiós";
    },
};

let busca = (llave) => {
    let i = process.argv.indexOf(llave);
    return i === -1 ? null : process.argv[i + 1];
};

let usuario = busca("--u");

if (usuario || saludos) {
    console.log(`Bienvenido ${usuario}`);
} else {
    console.log(`Lo siento, pero no te conozco`);
}

export { miModulo, busca };
