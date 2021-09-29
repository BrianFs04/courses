// EventEmitter: Generar eventos personalizados
import EventEmitter from "events";
import util from "util";

/* let emisor = new EventEmitter();

emisor.on("miEvento", (mensaje, status) => {
    console.log(status, mensaje);
});

emisor.emit("miEvento", "Hola", 200); */

let Mascota = function (nombre) {
    this.nombre = nombre;
};

util.inherits(Mascota, EventEmitter);

// Crear instacia
let canela = new Mascota("Canela");

canela.on("dice", function (dice) {
    console.log(`${this.nombre} dice ${dice}`);
});

canela.emit("dice", "Guau guau guau");
