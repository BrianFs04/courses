// Un parametro opcional en js lleva ?:
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("Se llama " + nombre + ", su apellido es " + apellido + ", su edad es " + edad);
        return;
    }
    console.log("Se llama " + nombre + ", su apellido es " + apellido);
};
opcionales('Brian', 'Florez', 24);
