// Solicitar un página HTML y enviarla al navegador
// nodemon --experimental-json-modules
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

http.createServer((req, res) => {
    console.log(`${req.method} solicitud ${req.url}`);

    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", (err, html) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) {
        let cssArchivo = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(cssArchivo, "UTF-8");
        fileStream.pipe(res);
    } else if (req.url.match(/.jpg$/)) {
        let imgArchivo = path.join(__dirname, "public", req.url);
        let fileStream = fs.createReadStream(imgArchivo);
        res.writeHead(200, { "Content-type": "image/jpeg" });
        fileStream.pipe(res);
    } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("404 Página no encontrada");
    }
}).listen(3000);
console.log("Servidor local en el puerto 3000");
