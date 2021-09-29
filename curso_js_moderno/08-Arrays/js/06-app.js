const shopCar = [];

// Define a product
const product = {
	name: '32 inches monitor',
	price: 400,
};

const product = {
	name: 'Cellphone',
	price: 800,
};

const product3 = {
	name: 'Keyboard',
	price: 50,
};

let result;

// To add, declarative form with rest operator
result = [...shopCar, product];
result = [...result, product2];
result = [product3, ...result];

console.table(result);
