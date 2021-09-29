// Recibir información desde una página con POST
import http from "http";
import fs from "fs";

http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.createReadStream("./public/formulario.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", (err) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(data);
        });
    }
}).listen(3000);
console.log("Servidor 3000");
