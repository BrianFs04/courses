const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

let result;

result = shopCar.filter((product) => product.price > 400);
result = shopCar.filter((product) => product.price < 600);
result = shopCar.filter((product) => product.name !== "Headphones");
result = shopCar.filter((product) => product.name === "Headphones");

console.log(result);
