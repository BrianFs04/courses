// Rest operatorconst
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

const months2 = [...months, "Aug"];
console.log(months2);

const product = { name: "HDD", price: 300 };

const shopCar2 = [...shopCar, product];
console.log(shopCar2);
