const frutas = ['manzana', 'uva', 'melon'];
const citricos = ['naranja', 'limon', 'toronja'];

const nuevo = [...frutas, ...citricos];

document.write(`${frutas}</br>`);
document.write(citricos + '</br>');
document.write(nuevo);
