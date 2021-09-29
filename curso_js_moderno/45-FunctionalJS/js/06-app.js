// Pure functions: The original value shouldn't be modified but assigned to another value
// Takes an input gives an output

// Takes a number and returns a number
const duplicate = (number) => number * 2;

const num1 = 20;

const result = duplicate(num1);

console.log(result); // 40
console.log(num1); // 20
