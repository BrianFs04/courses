// Other iterator of ES7 or ES8
const cities = ["London", "New York", "Madrid", "Paris"];
const orders = new Set(123, 231, 131, 102);
const data = new Map();

data.set("name", "Brian");
data.set("profession", "Student");

// Default iterator
for (let city of cities) {
    console.log(city); // values
}

for (let order of orders) {
    console.log(order); // values
}

for (let datum of data) {
    console.log(datum); // key and value
}

// Keys iterator
for (let keys of cities.keys()) {
    console.log(keys); // Indexes
}
for (let keys of orders.keys()) {
    console.log(keys); // Values as keys since Sets don't have keys
}
for (let keys of cities.keys()) {
    console.log(keys); // name, profession
}

/* // Values iterator
for (let value of cities.values) {
    console.log(value); // Values
}

for (let value of orders.values) {
    console.log(value); // Values
}

for (let value of data.values) {
    console.log(value); // Values
} */

/* // Entries iterator
for (let entry of cities.entries()) {
    console.log(entry); // Print key and value of the array
}

for (let entry of orders.entries()) {
    console.log(entry); // Add a key since it does not exist and print values
}

for (let entry of data.entries()) {
    console.log(entry); // Print key and value of the map
} */
