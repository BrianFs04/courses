const countries = [];

const newCountry = (country) =>
    new Promise((resolve) => {
        setTimeout(() => {
            countries.push(country);
            resolve(`Added ${country}`);
        }, 3000);
    });

newCountry("Germany")
    .then((result /*The result of resolve*/) => {
        console.log(result);
        console.log(countries);
        return newCountry("France");
    })
    .then((result) => {
        console.log(result);
        console.log(countries);
        return newCountry("England");
    })
    .then((result) => {
        console.log(result);
        console.log(countries);
    });
