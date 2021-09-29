// Guardar un archivo como stream
import fs from "fs";
import readline from "readline";

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Dame la fecha de tus pendientes (YYYYMMDD): ", (data) => {
    let stream = fs.createWriteStream(`${data}.txt`);
    stream.write(`Pendientes para el día ${data}\n`);
    //fs.writeFileSync(`${data}.txt`, `Pendientes para el día ${data}\n`);
    rl.setPrompt(`Pendiente para el día ${data} o fin: `);
    rl.prompt();

    rl.on("line", (pendiente) => {
        if (pendiente.toLowerCase().trim() === "fin") {
            stream.close();
            rl.close();
        } else {
            stream.write(pendiente.trim() + "\n");
            //fs.appendFileSync(`${data}.txt`, `${pendiente.trim()}\n`);
            rl.setPrompt(`Pendiente para el día ${data} o fin: `);
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log(`\nGracias, hasta la vista`);
});
