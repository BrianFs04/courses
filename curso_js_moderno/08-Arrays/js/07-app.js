const shopCar = [];

// Define a product
const product = {
    name: "32 inches monitor",
    price: 400,
};

const product2 = {
    name: "Cellphone",
    price: 800,
};

// Add at the end
shopCar.push(product);
shopCar.push(product2);

const product3 = {
    name: "Keyboard",
    price: 50,
};

const product4 = {
    name: "PC",
    price: 1000,
};

// Add at the beginning
shopCar.unshift(product3);

// Delete the last element of an array
shopCar.pop(); // Delete "Cellphone" element

// Delete the beginning of the array
shopCar.shift(); // Delete "KeyBoard" element

shopCar.unshift(product4); // Add "PC" element at the beginning

shopCar.splice(0, 1); // Deletes from index to element
console.table(shopCar);
