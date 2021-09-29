// for of itera sobre arreglos y for in itera sobre objetos
const tasks = ['Homework', 'Eat', 'Proyect', 'Study JS'];

console.table(tasks);

for (let task in tasks) {
	console.log(task); // Print the indexes
}

const car = {
	model: 'Camaro',
	year: 1969,
	motor: '6.0',
};

for (let property in car) {
	console.log(`${car[property]}`);
}

for (let [keys, values] of Object.entries(car)) {
	console.log(keys);
	console.log(values);
}
