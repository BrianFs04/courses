// Map is a list of key - value
const client = new Map();

// Add to a map
client.set("name", "Karen");
client.set("tipo", "Premium");
client.set("balance", 30000);
client.set(true, true);

console.log(client);

console.log(client.size);

console.log(client.has("name")); // true
console.log(client.get("name")); // Karen

client.delete("balance");

console.log(client.has("balance")); // false
console.log(client.get("name")); // undefined

client.clear();
console.log(client); // Nothing

const patient = new Map([
    ["name", "patient"],
    ["room", "undefined"],
]);

patient.set("Dr", "Asigned Dr");
patient.set("name", "Anthony");

console.log(patient);

// Maps are iterable

patient.forEach((data, index) => {
    console.log(index); // Keys
    console.log(data); // values
});
