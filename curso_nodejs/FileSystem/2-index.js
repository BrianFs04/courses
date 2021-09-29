// Leer archivos
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname and __filename are not available when using modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readdir("./Archivos", (err, archivos) => {
    archivos.forEach((archivo) => {
        let file = path.join(__dirname, "archivos", archivo);
        let datos = fs.statSync(file);
        // console.log(file, datos)
        if (datos.isFile() && archivo !== ".DS_Store") {
            fs.readFile(file, "UTF-8", (err, data) => {
                if (err) {
                    throw err;
                }
                console.log(data);
            });
            //console.log(file);
        }
    });
});
