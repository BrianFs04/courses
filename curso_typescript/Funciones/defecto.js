// Parametros por defecto
var mostrarDatos = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 24; }
    console.log("Se llama " + nombre + ", su apellido es " + apellido + ", su edad es " + edad);
};
mostrarDatos('Brian', 'Florez');
mostrarDatos('Brian', 'Florez', 21);
