const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

/* let total = 0;
shopCar.forEach((product) => (total += product.price));
console.log(total);
 */
//with a reduce
let result = shopCar.reduce((total, product) => total + product.price, 0);
console.log(result);
