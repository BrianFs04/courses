const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

const measures = {
    weight: "1kg",
    measure: "1m",
};

console.log(product);
console.log(measures);

// To join both objects values
const result = Object.assign(product, measures);
//Spread operator or rest operator
const result2 = { ...product, ...measures };

console.log(result);
console.log(result2);
