const shopCar = [
    { name: "24 inches monitor", price: 500 },
    { name: "TV", price: 1500 },
    { name: "PC", price: 2000 },
    { name: "Cellphone", price: 1000 },
    { name: "Tablet", price: 800 },
    { name: "Kindle", price: 900 },
];

// ForEach and Map gets the same
// Map creates a new array
shopCar.forEach((product) => `${product.name} - Price: ${product.price}`);
const newArray = shopCar.map(
    (product) => `${product.name} - Price: ${product.price}`
);
console.log(newArray);
