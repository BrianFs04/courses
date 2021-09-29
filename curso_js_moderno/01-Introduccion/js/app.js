// Single line comment examples
/*
    Multiple
    line
    comment
    example
*/
// Ask the user it's name
const name = prompt("What's your name?");

// Take the name and show it on the screen
document.querySelector(
    ".contenido"
).innerHTML = `${name} is learning modern JS`;

const product = "Desktop 24 inches";

// Messages
console.log("Hi");
console.table([1, 2, 3, 4]);
console.error("This is an error");

console.time("calculating...");

console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");
console.warn("This is forbidden");

console.timeEnd("calculating...");

// Objects
const obj = {
    name: "Brian",
};

function sayHi() {
    console.log("Hello!");
}
