// Symbols - allows to create an unique property - there are not 2 equal symbols
const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log("They are equal");
} else {
    console.log("They are different"); // It is going to throw this since symbols are not equal to another one
}

const name = Symbol();
const lastName = Symbol();

const person = {};

// Add name and lastName as object keys
person[name] = "Brian";
person[lastName] = "Florez";
person.clientType = "Premium";
person.balance = 5000;

console.log(person);
console.log(person[name]);

// Properties that use symbols are not iterable
for (let i in person) {
    console.log(i);
}

// Define a description of symbol
const nameClient = Symbol("Client name");
const client = {};

cliente[nameClient] = "Pedro";

console.log(client);
console.log(client[nameClient]); // Pedro
console.log(nameClient); // Client name
