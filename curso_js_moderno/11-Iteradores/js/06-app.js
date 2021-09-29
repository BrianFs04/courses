// forEach

const tasks = ["Homework", "Eat", "Proyect", "Study JS"];

tasks.forEach((task, i) => console.log(`${i}: ${task}`));

const shopCar = [
    { name: "24 inches monitor", price: 500 },
    { name: "TV", price: 1500 },
    { name: "PC", price: 2000 },
    { name: "Cellphone", price: 1000 },
    { name: "Tablet", price: 800 },
    { name: "Kindle", price: 900 },
];

const newArray = shopCar.forEach((product) => console.log(product.name)); // It doesn't create a new array
const newArray2 = shopCar.map((product) => console.log(product.name)); // Creates a new array

console.log(newArray); // undefined
console.log(newArray2); // creates a new array with the values
