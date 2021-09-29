// Mixin pattern
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Client extends Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const functionsPerson = {
    showInfo() {
        console.log(`Person name: ${this.name}  -  Email: ${this.email}`);
    },

    showName() {
        console.log(`My name is ${this.name}`);
    },
};

// Add functionsPerson to class Person
Object.assign(Person.prototype, functionsPerson);

const client = new Person("Brian", "email@email.com");
console.log(client);
client.showInfo();
client.showName();

const client2 = new Client("Client", "client@client.com");
client2.showInfo();
client2.showName();
