const shopCar = [
    { name: "24 inches monitor", price: 500 },
    { name: "TV", price: 1500 },
    { name: "PC", price: 2000 },
    { name: "Cellphone", price: 1000 },
    { name: "Tablet", price: 800 },
    { name: "Kindle", price: 900 },
];

for (let i = 0; i < shopCar.length; i++) {
    console.log(`${shopCar[i].name} - Price: ${shopCar[i].price}`);
}

shopCar.forEach(function (product) {
    console.log(`${product.name} - Price: ${product.price}`);
});
