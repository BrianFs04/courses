// Object literal
const client = {
    name: "Brian",
    balance: 500,
};

console.log(client);
console.log(typeof client);

// Object constructor
// This is what was recognized as POO in JS years before
// It allows to create dynamic and reusable objects
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

const brian = new Client("Brian", 500);

console.log(brian);
