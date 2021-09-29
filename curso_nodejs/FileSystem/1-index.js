// Leer un directorio con fs
import fs from "fs";

/* Sincrona 
let archivos = fs.readdirSync("./");
console.log(archivos);
*/

// Asíncrona
fs.readdir("./", (err, archivos) => {
    if (err) {
        throw err;
    }
    console.log(archivos);
});

console.log("Leyendo los archivos del directorio");
