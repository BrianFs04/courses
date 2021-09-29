// Funciones de tiempo
let tiempo = 3000;
let tiempoActual = 0;
let tiempoIntervalo = 500;

let porcentaje = (p) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Porcentaje: ${p}% `);
};

let intervalo = setInterval(() => {
    tiempoActual += tiempoIntervalo;
    porcien = Math.floor((tiempoActual / tiempo) * 100);
    porcentaje(porcien);
    //console.log(`Tiempo transcurrido: ${tiempoActual / 1000} segundos`);
}, tiempoIntervalo);

setTimeout(() => {
    clearInterval(intervalo);
    porcentaje(100);
    console.log("\nFin");
}, tiempo);
