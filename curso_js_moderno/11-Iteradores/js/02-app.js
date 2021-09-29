// break and continue
for (let i = 0; i <= 10; i++) {
	if (i === 5) {
		console.log('Five');
		continue;
	}
	if (i === 8) {
		console.log('Number eight');
		break;
	}
	console.log(`Number: ${i}`);
}

const shopCar = [
	{ name: '24 inches monitor', price: 500 },
	{ name: 'TV', price: 1500 },
	{ name: 'PC', price: 2000 },
	{ name: 'Cellphone', price: 1000, sale: true },
	{ name: 'Tablet', price: 800 },
	{ name: 'Kindle', price: 900 },
];

for (let i = 0; i < shopCar.length; i++) {
	if (shopCar[i].sale) {
		console.log(`${shopCar[i].name} is on sale`);
		continue;
	}
	console.log(shopCar[i].name);
}
