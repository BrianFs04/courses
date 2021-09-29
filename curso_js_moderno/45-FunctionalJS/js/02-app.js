// Functions as arguments
const addition = (a, b) => a + b;

const multiplication = (a, b) => a * b;

const addOrMultiply = (fn) => fn(10, 20);

console.log(addOrMultiply(addition));
console.log(addOrMultiply(multiplication));
