// Mover y renombrar archivos
import fs from "fs";

/* // Orden actual ./uno/dos/vida.txt
fs.renameSync("./uno/dos", "./dos");
// Orden despues ./uno/, ./dos/vida.txt

console.log("Carpeta movida"); */

/* // Borrar carpeta en forma sincrona
fs.rmdirSync("./uno");
console.log("Carpeta borrada"); */

// Procedemos a borrar archivos dentro de la carpeta
fs.readdirSync("./dos").forEach((archivo) => {
    fs.unlinkSync(`./dos/${archivo}`);
});
// Borrar carpeta en forma asíncrona
fs.rmdir("./dos", (err) => {
    if (err) {
        throw err;
        // Trae error porque la carpeta no está vacía
    } else {
        console.log("Carpeta borrada");
    }
});
