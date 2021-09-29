// Borrar archivos

import fs from "node:fs";

// Syncrona
/* try {
    fs.unlinkSync("./rename.txt");
} catch (err) {
    console.log(err);
} */

// Asíncrona
fs.unlink("rename.txt", (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Archivo eliminado");
    }
});
