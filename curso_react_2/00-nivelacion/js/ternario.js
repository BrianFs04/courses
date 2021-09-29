const cuenta = 0;

const mensaje = cuenta <= 0 ? 'No tienes saldo' : 'Tienes saldo';

const mensaje2 = cuenta <= 0 && 'Ok'; // Si es mayor a 0 saldría false
/* let mensaje;

if (cuenta <= 0) mensaje = 'No tienes saldo';
else mensaje = 'Tienes saldo'; */

document.write(mensaje + '</br>');
document.write(mensaje2);
