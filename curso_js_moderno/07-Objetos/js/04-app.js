const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

//const name = product.name;
//console.log(name);

// Destructuring
const { name, price, available } = product;
console.log(name);
console.log(price);
console.log(available);
