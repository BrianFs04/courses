// Class declaration
class Client {
	constructor(name, balance) {
		this.name = name;
		this.balance = balance;
	}

	showInfo() {
		return `Client: ${this.name}, your balance is ${this.balance}`;
	}

	// Static doesn't require an instantiation
	static welcome() {
		return `Welcome!`;
	}
}

const brian = new Client('Brian', 400);
console.log(brian.showInfo());
console.log(brian);
// console.log(brian.welcome()); // This shows an error because a static function doesn't bellow to an object but to a class
console.log(Client.welcome()); // This is going to work properly

// Class expression
const Client2 = class {
	constructor(name, balance) {
		this.name = name;
		this.balance = balance;
	}

	showInfo() {
		return `Client: ${this.name}, your balance is ${this.balance}`;
	}
};

const brian2 = new Client('Brian2', 500);
console.log(brian2.showInfo());
console.log(brian2);
