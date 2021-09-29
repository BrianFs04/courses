const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const shopCar = [
    { name: "27 inches monitor", price: 500 },
    { name: "Tv", price: 100 },
    { name: "Tablet", price: 200 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 400 },
    { name: "Cellphone", price: 700 },
];

months.forEach((month, i) => {
    if (month === "Apr") {
        console.log(`Found it on index ${i}`); // 3
    }
});

// Find the index of april
const index = months.findIndex((month) => month === "Apr");
console.log(index); // 3

const index2 = shopCar.findIndex((product) => product.name === "Keyboard");
console.log(index2); // 4
