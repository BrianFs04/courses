const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

// Check if a value exist in an array

months.forEach((month) => {
    if (month === "Jan") {
        console.log("January exists");
    }
});

const result = months.includes("Jan");
console.log(result); // true

// Check if a value exist in an array of objects
const exist = shopCar.some((product) => product.name === "Cellphone");
console.log(exists); // true

// Normal array with .some
const exist2 = months.some((month) => month === "Jan");
console.log(exists2);
