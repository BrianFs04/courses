/* Hoisting: Contextos de ejecución en JS
 Hay dos fases: creación - se crean las variables y se registran
y ejecución - se ejecutan*/

/* En function declaration es posible usar una función 
y luego declararla */

getClient("Brian"); // This will work
function getClient(name) {
    console.log(`Client's name: ${name}`);
}

getClient2("Pedro"); // Error
const getClient2 = function (name) {
    console.log(`Client's name: ${name}`);
};
