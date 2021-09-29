// Variables
const brand = document.querySelector("#marca");
const year = document.querySelector("#year");
const minPrice = document.querySelector("#minimo");
const maxPrice = document.querySelector("#maximo");
const doors = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Container for results
const result = document.querySelector("#resultado");

const max = new Date().getFullYear() - 1;
const min = max - 10 - 1;

// Generate an object with the search
const searchData = {
    brand: "",
    year: "",
    minPrice: "",
    maxPrice: "",
    doors: "",
    transmision: "",
    color: "",
};

// Events
document.addEventListener("DOMContentLoaded", () => {
    showCars(autos); // show the cars
    // Fill the year options
    fillSelect();
});

// Eventlistener for search selectors
brand.addEventListener("change", (e) => {
    searchData.brand = e.target.value;
    filterCar();
});

year.addEventListener("change", (e) => {
    searchData.year = parseInt(e.target.value);
    filterCar();
});

minPrice.addEventListener("change", (e) => {
    searchData.minPrice = e.target.value;
    filterCar();
});

maxPrice.addEventListener("change", (e) => {
    searchData.maxPrice = e.target.value;
    filterCar();
});

doors.addEventListener("change", (e) => {
    searchData.doors = parseInt(e.target.value);
    filterCar();
});

transmision.addEventListener("change", (e) => {
    searchData.transmision = e.target.value;
    filterCar();
});

color.addEventListener("change", (e) => {
    searchData.color = e.target.value;
    filterCar();
});

// Functions
function showCars(autos) {
    cleanHTML(); // Clean the previous HTML

    autos.forEach((auto) => {
        const {
            marca,
            modelo,
            year,
            puertas,
            transmision,
            precio,
            color,
        } = auto;
        const autoHTML = document.createElement("p");
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Doors - Trasmision: ${transmision} - Price: ${precio} - Color: ${color}
        `;
        // Insert in the html file
        result.appendChild(autoHTML);
    });
}

//CleanHTML
function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function fillSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        year.appendChild(option); // Adds options to year select
    }
}

// Function that filters search based
function filterCar() {
    const result = autos
        .filter(filterBrand)
        .filter(filterYear)
        .filter(filterMin)
        .filter(filterMax)
        .filter(filterDoors)
        .filter(filterTransmision)
        .filter(filterColor);

    if (result.length) {
        showCars(result);
    } else {
        noResult();
    }
}

function filterBrand(auto) {
    const { brand } = searchData;
    if (brand) {
        return auto.marca === brand;
    }
    return auto;
}

function filterYear(auto) {
    const { year } = searchData;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filterMin(auto) {
    const { minPrice } = searchData;
    if (minPrice) {
        return auto.precio >= minPrice;
    }
    return auto;
}

function filterMax(auto) {
    const { maxPrice } = searchData;
    if (maxPrice) {
        return auto.precio <= maxPrice;
    }
    return auto;
}

function filterDoors(auto) {
    const { doors } = searchData;
    if (doors) {
        return auto.puertas === doors;
    }
    return auto;
}

function filterTransmision(auto) {
    const { transmision } = searchData;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filterColor(auto) {
    const { color } = searchData;
    if (color) {
        return auto.color === color;
    }
    return auto;
}

function noResult() {
    cleanHTML();

    const noResult = document.createElement("div");
    noResult.classList.add("alerta", "error");
    noResult.textContent = "No results, try another search";
    result.append(noResult);
}
