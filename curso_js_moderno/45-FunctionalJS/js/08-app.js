/*const client = "Brian";

function showClient() {
    const client = "Jesus";

    console.log(client);
}

console.log(client); // Brian

showClient(); // Jesus */

// Closures: Access to a function of a value from outside

const getClient = () => {
    const name = "Juan";

    function showName() {
        console.log(name);
    }

    return showName;
};

const client = getClient();

client(); // Juan
