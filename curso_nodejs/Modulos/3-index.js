// ReadLine: Lee datos de una secuencia legible
import ReadLine from "readline";

let rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let num = Math.floor(Math.random() * 10 + 1);
let limite = 4;
let intento = 1;

rl.question("Adivina el número entre 1 y 10: ", (res) => {
    intento++;
    if (res.trim() === num) {
        rl.close();
    } else {
        rl.setPrompt(`Intento ${intento}, intente de nuevo: `);
        rl.prompt();
        rl.on("line", (res) => {
            if (res.trim() === num) {
                rl.close();
            } else {
                intento++;
                if (intento <= limite) {
                    rl.setPrompt(`Intento ${intento}, intente de nuevo: `);
                    rl.prompt();
                } else {
                    rl.close();
                }
            }
        });
    }
});

rl.on("close", () => {
    console.log(`El número mágico es ${num}`);
});
