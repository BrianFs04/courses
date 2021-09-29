const name = localStorage.getItem("name");
console.log(name);

// Objects
const productJSON = localStorage.getItem("product");
console.log(productJSON);

// Transfrom a string to an object when it has an object form
console.log(JSON.parse(productJSON));
