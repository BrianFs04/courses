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

// Instantiate
const pedro = new Client("Pedro", 6000);

console.log(pedro.clientType()); // Platinum
console.log(pedro.nameClientBalance()); // Name: Pedro, Balance: 6000, Client type: Platinum
pedro.withdrawBalance(1000);
console.log(pedro.nameClientBalance());

console.log(pedro);
