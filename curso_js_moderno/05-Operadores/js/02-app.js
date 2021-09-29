const num1 = 20;
const num2 = "20";
const num3 = 30;

// Equal to
console.log(num1 == num3);
console.log(num1 == num2);

// Strict equal to
console.log(num1 === num2);
console.log(num1 === parseInt(num2));
console.log(typeof num1);
console.log(typeof num2);

// Not equal to
const pass1 = "admin";
const pass2 = "Admin";

console.log(pass1 != pass2);
console.log(num1 != num2);
console.log(num1 !== num2);
