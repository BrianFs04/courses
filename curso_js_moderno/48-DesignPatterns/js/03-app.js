// Singleton : No permite crear multiples instancias de una misma clase

let instance = null;

class Person {
    constructor(name, email) {
        if (!instance) {
            this.name = name;
            this.email = email;
            instance = this;
        } else {
            return instance;
        }
    }
}

const person = new Person("Brian", "email@email.com");
console.log(person);

const person2 = new Person("Juan", "juan@juan.com");
console.log(person2);
