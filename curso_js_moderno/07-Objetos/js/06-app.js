const product = {
    name: "24 inches monitor",
    price: 300,
    available: true,
    info: {
        measures: {
            weight: "1kg",
            measure: "1m",
        },
        origin: {
            country: "China",
        },
    },
};

const {
    name,
    info,
    info: {
        origin,
        origin: { country },
    },
} = product;

console.log(name);
console.log(info);
console.log(origin);
console.log(country);
