function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

const brian = new Client("Brian", 500);

function formatClient(client) {
    const { name, balance } = client;
    return `Client ${name} has a balance of ${balance}`;
}

function formatEnterprise(client) {
    const { name, balance, category } = client;
    return `Enterprise ${name} has a balance of ${balance} and belongs to the category ${category}`;
}

console.log(formatClient(brian));

function Enterprise(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

const globant = new Enterprise("Globant", 4000, "Programmers");
console.log(formatClient(globant));
