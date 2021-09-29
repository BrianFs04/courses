const shopCar = [];

// Define a product
const product = {
    name: "32 inches monitor",
    price: 400,
};

const product = {
    name: "Cellphone",
    price: 800,
};

// Add at the end
shopCar.push(product);
shopCar.push(product2);

const product3 = {
    name: "Keyboard",
    price: 50,
};

// Add at the beginning
shopCar.unshift(product3);

console.table(shopCar);
