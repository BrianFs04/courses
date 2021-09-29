// Leer archivos de tipo JSON
// node --experimental-modules --es-module-specifier-resolution=node 9-index.js
/*import grafica from "./grafica.json";

//console.log(grafica.rows);

for (let i = 0; i < 5; i++) {
    console.log(grafica.rows[i].c[0].v, grafica.rows[i].c[1].v);
} */

import fs from "fs";

fs.readFile("./grafica.json", (err, data) => {
    let grafica = JSON.parse(data);
    for (let i = 0; i < 5; i++) {
        console.log(grafica.rows[i].c[0].v, grafica.rows[i].c[1].v);
    }
});
