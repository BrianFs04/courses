// Class declaration
class Client {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    showInfo() {
        return `Client: ${this.name}, your balance is ${this.balance}`;
    }

    // Static doesn't required an instantiation
    static welcome() {
        return `Welcome!`;
    }
}

//Heritage
class Enterprise extends Client {
    constructor(name, balance, phone, category) {
        super(name, balance); //super goes to the parent to heritage its attributes properly
        this.phone = phone;
        this.category = category;
    }

    // When we write down a method with the same name as in the parent class it is going to be overwritten
    static welcome() {
        return `Welcome to enterprises`;
    }
}

const brian = new Client("Brian", 400);
const enterprise = new Enterprise("Code", 10000, 12334123, "Learning onlne");
console.log(enterprise);
console.log(enterprise.showInfo());

console.log(Client.welcome()); // Welcome!
console.log(Enterprise.welcome()); // Welcome to enterprises
