// Controlar procesos con spawn
import spawn from "child_process";

let cp = spawn.spawn("node", ["6-index"]);
cp.stdout.on("data", (data) => {
    console.log(`Baloto: ${data.toString().trim()}`);
});

process.stdin.on("data", (data) => {
    console.log("Buena suerte");
    process.exit();
});
