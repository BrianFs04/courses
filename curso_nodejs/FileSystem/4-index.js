// Crear directorios
import fs from "fs";
import readline from "readline";
import path from "path";
import { fileURLToPath } from "url";

let dir = "pendientes";
let rl = readline.createInterface(process.stdin, process.stdout);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(dir)) {
    console.log("El directorio ya existe");
} else {
    fs.mkdir(dir, (err) => {
        if (err) {
            throw err;
        } else {
            console.log(`Carpeta '${dir}' creada`);
        }
    });
}

rl.question("Dame la fecha de tus pendientes (YYYYMMDD): ", (data) => {
    let archivo = path.join(__dirname, dir, `${data}.txt`);
    fs.writeFileSync(archivo, `Pendientes para el día ${data}\n`);
    rl.setPrompt(`Pendiente para el día ${data} o fin: `);
    rl.prompt();

    rl.on("line", (pendiente) => {
        if (pendiente.toLowerCase().trim() === "fin") {
            rl.close();
        } else {
            fs.appendFileSync(archivo, `${pendiente.trim()}\n`);
            rl.setPrompt(`Pendiente para el día ${data} o fin: `);
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\nGracias, hasta la vista`);
});
