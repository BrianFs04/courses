// Mediator

function Seller(name) {
    this.name = name;
    this.room = null;
}

Seller.prototype = {
    onSale: (article, price) => {
        console.log(
            `We have the following article ${article}, we start at ${price}`
        );
    },
    sold: (buyer) => {
        console.log(`Sold it to ${buyer}`);
    },
};

function Buyer(name) {
    this.name = name;
    this.room = null;
}

Buyer.prototype = {
    onSale: (quantity, buyer) => {
        console.log(`${buyer.name} : ${quantity}`);
    },
};

function Auction() {
    let buyers = {};
    return {
        register: (user) => {
            buyers[user.name] = user;
            user.room = this;
        },
    };
}

// Create Objects
const brian = new Buyer("Brian");
const juan = new Buyer("Juan");
const seller = new Seller("Car seller");
const auction = new Auction();

// They have to been registrated
auction.register(brian);
auction.register(juan);
auction.register(seller);

seller.onSale("Mustang 66", 300);

juan.onSale(350, juan);
brian.onSale(400, brian);
juan.onSale(500, juan);
brian.onSale(700, brian);

seller.sold("Brian");
