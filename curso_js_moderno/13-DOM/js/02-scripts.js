// Select elements by its class (old way)

const header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

// If classes exist mote than 1 time
const containers = document.getElementsByClassName("contenedor");
console.log(containers);

//If a class does not exist
const notExist = docuemnt.getElementsByClassName("does-not-exist");
console.log(notExist);
