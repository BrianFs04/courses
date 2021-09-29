const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

product.available = false;

delete product.price;

console.log(product); // available: false
