// Process
//process.stdout.write("Hola ");
//process.stdout.write("cara de bola\n\n");

let preguntas = ["Cuál es tu nombre?", "Cuál es tu apellido?"];
let respuestas = [];

function pregunta(i) {
    process.stdout.write(`\n ${preguntas[i]}: `);
}

process.stdin.on("data", function (data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        process.exit();
    }
});

process.on("exit", function () {
    process.stdout.write(
        `\n Hasta la vista, ${respuestas[0]} ${respuestas[1]}`
    );
});

pregunta(0);
