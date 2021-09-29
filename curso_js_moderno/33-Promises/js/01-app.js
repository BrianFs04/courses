const countries = ["France", "Spain", "Portugal", "Australia", "England"];

function newCountry(country, callback) {
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 2000);
}
function showCountries() {
    setTimeout(() => {
        countries.forEach((country) => {
            console.log(country);
        });
    }, 3000);
}

showCountries();
newCountry("Germany", showCountries);
