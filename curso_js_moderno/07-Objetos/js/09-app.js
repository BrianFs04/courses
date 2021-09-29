"use strict"; //Follow the JS rules

const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

// It allows to modify the existent properties
// It doesn't allow to add or delete properties
Object.seal(product);

product.available = false;
//product.image = "imagen.jpg";
//delete product.price;

console.log(product); // available: false

console.log(Object.isSealed(product));
