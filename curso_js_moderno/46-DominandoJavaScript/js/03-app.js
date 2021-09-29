// Coercion

// Implicit coertion
const num1 = 20;
const num2 = "40";

console.log(num1 + num2); // 2040

// Explicit coertion
console.log(Number(num2)); // When it's used a function

const order = [1, 2, 3, 4];
console.log(order.toString());
console.log(JSON.stringify(order));
