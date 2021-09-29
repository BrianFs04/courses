// weakmaps - it keeps data as private
const product = {
    idProduct: 10,
};

const weakmap = new WeakMap();

// Add to a weakmap
weakmap.set(product, "Monitor");

console.log(weakmap.has(product)); // true
console.log(weakmap.get(product)); // Monitor

console.log(weakmap);
console.log(weakmap.delete(product)); // Deletes the whole weakmap
console.log(weakmap);


