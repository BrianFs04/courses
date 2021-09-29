const tasks = ['Homework', 'Eat', 'Proyect', 'Study JS'];

const shopCar = [
	{ name: '24 inches monitor', price: 500 },
	{ name: 'TV', price: 1500 },
	{ name: 'PC', price: 2000 },
	{ name: 'Cellphone', price: 1000 },
	{ name: 'Tablet', price: 800 },
	{ name: 'Kindle', price: 900 },
];

for (let task of tasks) {
	console.log(task); // Print the elements
}

for (let product of shopCar) {
	console.log(product);
}
