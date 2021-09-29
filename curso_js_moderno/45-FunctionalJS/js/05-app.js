const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

const getNames = (p) => p.name;
const result = shopCar.map(getNames);

console.log(result);

const moreThan400 = (p) => p.price > 400;
const result2 = shopCar.filter(moreThan400);

console.log(result2);
