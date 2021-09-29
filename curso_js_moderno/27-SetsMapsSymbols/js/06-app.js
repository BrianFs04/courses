function createIterator(shopCar) {
    let i = 0;

    return {
        next: () => {
            const end = i >= shopCar.length;
            const value = !end ? shopCar[i++] : undefined;

            return { end, value };
        },
    };
}

const shopCar = ["Product 1", "Product 2", "Product 3"];

// Use the iterator
const traverseCar = createIterator(shopCar);

console.log(traverseCar.next);
console.log(traverseCar.next);
console.log(traverseCar.next);
console.log(traverseCar.next);
