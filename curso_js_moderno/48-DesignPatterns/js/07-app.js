// Namespace pattern
const restaurantApp = {};

restaurantApp.dishes = [
    {
        dish: "Pizza",
        price: 25,
    },
    {
        dish: "Hamburguer",
        price: 20,
    },
    {
        dish: "Hot Dog",
        price: 20,
    },
];

restaurantApp.functions = {
    showMenu: (dishes) => {
        console.log(`Welcome to our menu`);

        dishes.forEach((dish, index) => {
            console.log(`${index} : ${dish.dish} $${dish.price}`);
        });
    },

    order: (id) => {
        console.log(`Your ${restaurantApp.dishes[id].dish} is being prepared`);
    },

    addDish: (dish, price) => {
        const newDish = {
            dish,
            price,
        };

        restaurantApp.dishes.push(newDish);
    },
};

restaurantApp.functions.addDish("Pasta", 15);

const { dishes } = restaurantApp;

restaurantApp.functions.showMenu(dishes);

restaurantApp.functions.order(2);
