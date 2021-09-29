// Renombrar archivos
import fs from "fs";

// Syncrona
/* try {
    fs.renameSync("./package.txt", "./package.json");
} catch (err) {
    console.log(err);
}
 */
//Asincrona
/* fs.rename("./rename.json", "rename.txt", (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Archivo renombrado");
    }
}); */
