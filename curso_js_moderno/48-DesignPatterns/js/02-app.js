// Constructor Pattern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Client extends Person {
    constructor(name, email, enterprise) {
        super(name, email);
        this.enterprise = enterprise;
    }
}
const person = new Person("Brian", "email@email.com");
console.log(person);

const client = new Client("Juan", "client@client.com", "Code");
console.log(client);
