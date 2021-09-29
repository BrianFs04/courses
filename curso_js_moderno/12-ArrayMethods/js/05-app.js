const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

// forEach
let result = "";
shopCar.forEach((product, i) => {
    if (product.name === "Tablet") {
        result = shopCar[i];
    }
});

console.log(result);

// .find gets the first occurrence
const result2 = shopCar.find((product) => product.name === "Tablet");
console.log(result2);
