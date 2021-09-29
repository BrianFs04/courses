"use strict"; //Follow the JS rules

const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
};

//It allows us to give it a behave more similar to a const
Object.freeze(product);

//product.available = false;
//product.image = "imagen.jpg";
//delete product.price;

console.log(product);

console.log(Object.isFrozen(product));
