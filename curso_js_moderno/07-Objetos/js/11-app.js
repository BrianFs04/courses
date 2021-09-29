const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
    showInfo: function () {
        console.log(`The product: ${this.name} it's at ${this.price}`);
    },
};

const product2 = {
    name: "12 inches tablet",
    price: 500,
    available: true,
    showInfo: function () {
        console.log(`The product: ${this.name} it's at ${this.price}`);
    },
};

product.showInfo();
product2.showInfo();
