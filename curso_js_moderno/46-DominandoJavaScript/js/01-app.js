// Scope: Alcance de una variable

const client = "Brian";

const getClient = () => {
    const client = "Jesus";
    console.log(client);
};

console.log(client); // Brian
getClient(); // Jesus

// Scope in block

/* const login = true; // global scope

function loggedClient() {
    const name = "Juan";
    console.log(name); // Juan

    if (login) {
        const name = "Admin";
        console.log(name); // Admin
    }
}

loggedClient(); */

const login = true; // global scope

function loggedClient() {
    const name1 = "Juan";
}

function function2() {
    console.log(name1); // error
}

function2();
loggedClient();
