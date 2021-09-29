// Implicit Binding

const user = {
    name: "Brian",
    years: 24,
    information() {
        console.log(`I'm ${this.name} and I'm ${this.years}`);
    },
    pet: {
        name: "Zeus",
        years: 1,
        information() {
            console.log(`I'm ${this.name} and I'm ${this.years}`);
        },
    },
};

user.information();
user.pet.information();
