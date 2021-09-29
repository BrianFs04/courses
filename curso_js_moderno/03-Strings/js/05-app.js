const product = "20 inches monitor";

console.log(product);

// .replace to replace or add some text
console.log(product.replace("inches", '"'));
console.log(product.replace("monitor", "curve monitor"));

// .slice to cut
console.log(product.slice(0, 10));
console.log(product.slice(8));
console.log(product.slice(2, 1));

// Alternative to slice
console.log(product.substring(0, 10));
console.log(product.substring(2, 1));

const user = "Brian";
console.log(user.substring(0, 1));
console.log(user.charAt(0));
