const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

// Add new properties to an object
product.image = "image.jpg";

// Delete properties of an object
delete product.available;

console.log(product);
