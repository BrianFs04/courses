// Hacer una solicitud HTTP (request)
import https from "https";
import fs from "fs";

let opciones = {
    hostname: "es.wikipedia.org",
    port: 443,
    path: "/wiki/Node.js",
    method: "GET",
};

let req = https.request(opciones, (res) => {
    let respuesta = "";

    console.log("Estado del servidor: ", res.statusCode);
    res.setEncoding("UTF-8");
    res.once("data", (data, err) => {
        if (err) {
            throw err;
        }
        console.log(data);
    });
    res.on("data", (data, err) => {
        if (err) {
            throw err;
        }
        console.log(data.length);
        respuesta += data;
    });
    res.on("end", (err) => {
        if (err) {
            throw err;
        }
        fs.writeFile("nodejs.html", respuesta, (err) => {
            if (err) {
                throw err;
            }
            console.log("Proceso terminado");
        });
    });
});

req.on("error", (err) => {
    console.log("Error en la solicitud");
});

req.end();
