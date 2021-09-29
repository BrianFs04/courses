// Crear archivos y añadir datos
import fs from "fs";
import readline from "readline";

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Dame la fecha de tus pendientes (YYYYMMDD): ", (data) => {
    fs.writeFileSync(`${data}.txt`, `Pendientes para el día ${data}\n`);
    rl.setPrompt(`Pendiente para el día ${data} o fin: `);
    rl.prompt();

    rl.on("line", (pendiente) => {
        if (pendiente.toLowerCase().trim() === "fin") {
            rl.close();
        } else {
            fs.appendFileSync(`${data}.txt`, `${pendiente.trim()}\n`);
            rl.setPrompt(`Pendiente para el día ${data} o fin: `);
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\nGracias, hasta la vista`);
});
