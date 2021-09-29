const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

//const name = product.name;
//console.log(name);

// Destructuring with objects
const { name } = product;
console.log(name);

// Destructuting with arrays
const nums = [10, 20, 30, 40, 50];

const [first, ...rest] = nums;

console.log(first);
console.log(rest);
