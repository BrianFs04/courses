// Weakset - It only allows objects

const weakset = new WeakSet();

const client = {
    name: Brian,
    balance: 100,
};

//const name = "Brian";

weakset.add(client);
//weakset.add(name); // This is going to throw an error because weaksets only allows objects

console.log(weakset.has(client));

weakset.delete(client);

console.log(client.size); // A weakset does not have .size

// Weaksets are not iterables

console.log(weakset);
