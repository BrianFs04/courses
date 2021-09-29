const criptoSelect = document.querySelector("#criptomonedas");
const coinSelect = document.querySelector("#moneda");
const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");

const objSearch = {
    moneda: "",
    criptomoneda: "",
};

// Create a promise
const getCripto = (criptos) =>
    new Promise((resolve) => {
        resolve(criptos);
    });

document.addEventListener("DOMContentLoaded", () => {
    consultCriptos();

    form.addEventListener("submit", submitForm);

    criptoSelect.addEventListener("change", readValue);
    coinSelect.addEventListener("change", readValue);
});

function consultCriptos() {
    const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
    fetch(url)
        .then((response) => response.json())
        .then((result) => getCripto(result.Data))
        .then((criptos) => selectCripto(criptos));
}

function selectCripto(criptos) {
    criptos.forEach((cripto) => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement("option");

        option.value = Name;
        option.textContent = FullName;
        criptoSelect.appendChild(option);
    });
}

function readValue(e) {
    objSearch[e.target.name] = e.target.value;
}

function submitForm(e) {
    e.preventDefault();

    // Validate
    const { moneda, criptomoneda } = objSearch;

    if (moneda === "" || criptomoneda === "") {
        showAlert("Both fields are required");
        return;
    }

    // Consult the API with the results
    consultAPI();
}

function showAlert(message) {
    const error = document.querySelector(".error");
    if (!error) {
        const alert = document.createElement("p");
        alert.classList.add("error");
        alert.textContent = message;
        console.log(alert);

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

function consultAPI() {
    const { moneda, criptomoneda } = objSearch;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    showSpinner();
    fetch(url)
        .then((response) => response.json())
        .then((info) => {
            showPriceHTML(info.DISPLAY[criptomoneda][moneda]);
        });
}

function showPriceHTML(info) {
    cleanHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = info;

    const price = document.createElement("p");
    price.classList.add("precio");
    price.innerHTML = `Price: <span>${PRICE}</span>`;

    const highPrice = document.createElement("p");
    highPrice.innerHTML = `<p> Highest price of today: ${HIGHDAY}</p>`;

    const lowPrice = document.createElement("p");
    lowPrice.innerHTML = `<p> Lowest price of today: ${LOWDAY}</p>`;

    const lastHours = document.createElement("p");
    lastHours.innerHTML = `<p> Last 24 hours variation: ${CHANGEPCT24HOUR}%</p>`;

    const lastUpdate = document.createElement("p");
    lastUpdate.innerHTML = `<p> Last update: ${LASTUPDATE}</p>`;

    result.appendChild(price);
    result.appendChild(highPrice);
    result.appendChild(lowPrice);
    result.appendChild(lastHours);
    result.appendChild(lastUpdate);
}

function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function showSpinner() {
    cleanHTML();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;

    result.appendChild(spinner);
}
