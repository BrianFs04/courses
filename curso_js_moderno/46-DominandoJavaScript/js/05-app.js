// Explicit binding

function person(el1, el2) {
    console.log(`My name is ${this.name} and I listen to ${el1} and ${el2}`);
}

const info = {
    name: "Brian",
};

const favoriteMusic = ["Rock", "Pop"];

person.call(info, favoriteMusic[0], favoriteMusic[1]); // Every element of the array

person.apply(info, favoriteMusic); // The whole array

const newFn = person.bind(info, favoriteMusic[0], favoriteMusic[1]); // It creates a new function
newFn();
