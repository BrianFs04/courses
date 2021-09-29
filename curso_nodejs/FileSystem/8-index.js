// Borrar y mover un archivo

import fs from "fs";

// Renombrar archivos dentro de un directorio
/* fs.rename("./Otro/archivo.txt", "./Otro/miArchivo.txt", (err) => {
    if (err) {
        throw err;
    }
    console.log("Archivo renombrado");
}); */

// Mover archivos
fs.rename("./Otro/miArchivo.txt", "./miArchivo.txt", (err) => {
    if (err) {
        throw err;
    }
    console.log("Archivo movido");
});
