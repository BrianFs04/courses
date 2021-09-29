// Set allows us to create a list of values with no duplciated ones
const shopCar = new Set();

shopCar.add("Shirt");
shopCar.add("LP #1");
shopCar.add("LP #2");
shopCar.add("LP #3");
shopCar.add("Shirt"); // It's not gonna add it because it is already in the set

console.log(shopCar.delete("Shirt")); // true

console.log(shopCar.has("Shirt")); // true

console.log(shopCar.size); // Number of elements

console.log(shopCar);

shopCar.clear(); // Delete all elements of the set

// Sets are iterable

shopCar.forEach((product, index, belong) => {
    console.log(product);
    console.log(index);
    console.log(belong);
});

console.log(shopCar);

// Of the next array delete the duplicated ones
const nums = [10, 20, 30, 40, 50, 10, 20];

const noDuplicated = new Set(nums);

console.log(noDuplicated);
