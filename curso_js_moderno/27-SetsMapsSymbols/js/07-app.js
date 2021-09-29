// Generators - it is a function that return a iterator
function* createGenerator() {
    yield 1;
    yield "Brian";
    yield 3 * 3;
    yield true;
}

const iterator = createGenerator();

console.log(iterator);
console.log(iterator.next().value); // 1
console.log(iterator.next().done); // false
console.log(iterator.next().value); // 9
console.log(iterator.next().value); // true
console.log(iterator.next().done); // true
console.log(iterator);

// Generator to shop car

function* generatorCar(shopCar) {
    for (let i = 0; i < shopCar.length; i++) {
        yield shopCar[i];
    }
}

const shopCar = ["Product 1", "Product 2", "Product 3"];

const iterator = generatorCar(shopCar);

console.log(iterator.next()); // {value: "Product 1", done: false}
console.log(iterator.next()); // {value: "Product 2", done: false}
console.log(iterator.next()); // {value: "Product 3", done: false}
console.log(iterator.next()); // {value: undefined, done: true}
