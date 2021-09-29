function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Function searches in the current object
// Arrow functions search in the global window
Client.prototype.clientType = function () {
    let type;
    if (this.saldo > 10000) {
        type: "Gold";
    } else if (this.saldo > 5000) {
        type: "Platinum";
    } else {
        type: "Normal";
    }
    return type;
};

Client.prototype.nameClientBalance = function () {
    return `Name: ${this.name}, Balance: ${
        this.balance
    }, Client type: ${this.clientType()}`;
};

Client.prototype.withdrawBalance = function (withdraw) {
    this.balance -= withdraw;
};

function Person(name, balance, phone) {
    // Heritage attributes
    Client.call(this, name, balance);
    this.phone = phone;
}

// Heritage the functions
Person.prototype = Object.create(Client.prototype);
// Add the constructor
Person.prototype.create = Client;

// Instantiate
const brian = new Person("Brian", 11000, 3142345467);
console.log(brian);
console.log(brian.nameClientBalance());

Person.prototype.showPhone = function () {
    return `The phone of this person is ${this.phone}`;
};

console.log(brian.showPhone());
