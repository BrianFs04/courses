// Manejo de stream: Leer texto grandes sin detener el hilo de node
import fs from "fs";

//let archivo = fs.readFileSync("./texto.txt");

let stream = fs.createReadStream("./texto.txt", "UTF-8");

let texto = "";

stream.once("data", () => {
    console.log("Inicio de carga");
});

stream.on("data", (textoParcial) => {
    console.log("Caracteres leidos: ", textoParcial.length);
    texto += textoParcial;
});

stream.on("end", () => {
    console.log("Texto leído: ", texto.length);
});
