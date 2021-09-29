function add(a, b) {
    return a + b;
}

const result = add(15, 12);

console.log(result);

// More advanced example

let total = 0;

function addCar(price) {
    return (total += price);
}

function tax(total) {
    return total * 1.15;
}

total = addCar(300);
total = addCar(100);
total = addCar(600);

console.log(total);

const totalToPay = tax(total);

console.log(`The net amount is: ${totalToPay}`);
