const container = document.querySelector(".container");
const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
    form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
    e.preventDefault();

    // Validate
    const city = document.querySelector("#ciudad").value;
    const country = document.querySelector("#pais").value;

    if (city === "" || country === "") {
        // There was an error
        showError("Both inputs are required");
        return;
    }
    // Consult the API
    consultAPI(city, country);
}

function showError(message) {
    const error = document.querySelector(".bg-red-100");

    if (!error) {
        // Create an alert
        const alert = document.createElement("div");
        alert.classList.add(
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-md",
            "mx-auto",
            "mt-6",
            "text-center"
        );

        alert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${message}</span>
    `;

        container.appendChild(alert);

        // Delete alert after 3 seconds
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

function consultAPI(city, country) {
    const appId = "9e1a3309f607a8ae686ac523f94c1900";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    // Show a spinner of loading
    Spinner();
    fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
            cleanHTML(); // Clean previous HTML
            if (data.cod === "404") {
                showError("City not found");
                return;
            }
            // Print the response in the HTML
            showWeather(data);
        });
}

function showWeather(data) {
    const {
        name,
        main: { temp, temp_max, temp_min },
    } = data;

    const celsius = kelvinToCelsius(temp);
    const max = kelvinToCelsius(temp_max);
    const min = kelvinToCelsius(temp_min);

    const nameCity = document.createElement("p");
    nameCity.textContent = `Weather in ${name}`;
    nameCity.classList.add("font-bold", "text-3xl");

    const current = document.createElement("p");
    current.innerHTML = `${celsius} &#8451;`;
    current.classList.add("font-bold", "text-6xl");

    const tempMax = document.createElement("p");
    tempMax.innerHTML = `Max: ${max} &#8451;`;
    tempMax.classList.add("text-xl");

    const tempMin = document.createElement("p");
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add("text-xl");

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("text-center", "text-white");
    resultDiv.appendChild(nameCity);
    resultDiv.appendChild(current);
    resultDiv.appendChild(tempMax);
    resultDiv.appendChild(tempMin);

    result.appendChild(resultDiv);

    form.reset();
}

const kelvinToCelsius = (degrees) => parseInt(degrees - 273.15);

function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function Spinner() {
    cleanHTML();
    const divSpinner = document.createElement("div");
    divSpinner.classList.add("sk-fading-circle");

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    result.appendChild(divSpinner);
}
