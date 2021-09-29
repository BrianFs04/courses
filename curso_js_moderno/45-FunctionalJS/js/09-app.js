// Partials and currying: Divide functions into partials
const add = (a, b, c) => a + b + c;

/* const partial = (a) => (b, c) => add(a, b, c);

const num1 = partial(5);
const result = num1(4, 3);
console.log(result); */

console.log(add(1, 2, 3));

const partial2 = (a) => (b) => (c) => add(a, b, c);

const num1 = partial2(5);
const num2 = num1(4);
const result = num2(3);

const result2 = partial2(5)(4)(3);

console.log(result);
console.log(result2);
