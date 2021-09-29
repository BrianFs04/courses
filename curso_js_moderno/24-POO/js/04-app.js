// Class declaration
class Client {
	#name; // This property is going to be private

	constructor(name, balance) {
		this.#name = name;
		this.balance = balance;
	}

	showInfo() {
		return `Client: ${this.#name}, your balance is ${this.balance}`;
	}

	// Static doesn't require instantiation
	static welcome() {
		return `Welcome!`;
	}
}

const brian = new Client('Brian', 200);
console.log(brian);
// console.log(brian.#name) // Error because it's a private attribute
console.log(brian.showInfo());

// Way with set and get
class Client2 {
	#name; // This property is going to be private

	setName(name) {
		this.#name = name;
	}

	getName() {
		return this.#name;
	}
}

const brian2 = new Client2();
brian2.setName('Brian');
console.log(brian2.getName()); // Brian -  This would work - Accessing from the class
