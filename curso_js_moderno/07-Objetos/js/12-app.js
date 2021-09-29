// Object literal
const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

// Object constructor
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.available = true;
}

const product2 = new Product("24 inches monitor", 500);
console.log(product2);

const product3 = new Product("Tv", 100);
console.log(product3);
