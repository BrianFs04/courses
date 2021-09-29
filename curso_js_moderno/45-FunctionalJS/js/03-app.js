const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

/* const result = shopCar.filter((product) => {
    return product.price > 400;
});

console.log(result); */

// Higher order funtion: A function that takes or return a function as an argument

const moreThan400 = (product) => product.price > 400;

const result = shopCar.filter(moreThan400);

console.log(result);
