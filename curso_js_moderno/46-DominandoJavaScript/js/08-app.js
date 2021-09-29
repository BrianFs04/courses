// Self: It refers to the global window since window === self := true

self.onload = () => {
    console.log("Window ready");
};

window.color = "white";
const product = {
    name: "20 inches monitor",
    price: 30,
    available: true,
    showInfo: function () {
        /*         const self = this; 
        return `Product: ${self.name} is at ${this.price}`; */
        return `${self.color}`;
    },
};

console.log(product.showInfo());
